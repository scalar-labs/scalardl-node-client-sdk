const {ClientService} = require('../scalardl-node-client-sdk');
const fs = require('fs');
const cassandra = require('cassandra-driver');
const assert = require('assert');
const path = require('path');

const properties = {
  'scalar.dl.client.server.host': 'localhost',
  'scalar.dl.client.server.port': 50051,
  'scalar.dl.client.server.privileged_port': 50052,
  'scalar.dl.client.cert_holder_id': `foo@${Date.now()}`,
  'scalar.dl.client.cert_version': 1,
  'scalar.dl.client.tls.enabled': false,
  'scalar.dl.client.cert_path': path.join(__dirname, 'fixture', 'cert.pem'),
  'scalar.dl.client.private_key_path': path.join(
      __dirname,
      'fixture',
      'key.pem',
  ),
  'scalar.dl.client.tls.ca_root_cert_path': path.join(
      __dirname,
      'fixture',
      'cert.pem',
  ),
};

let clientService;
let cassandraClient;

describe('Integration test with File-based Properties', async () => {
  const mockedFunctionId = `TestFunction${Date.now()}`;
  const mockedContractId = `StateUpdater${Date.now()}`;
  const mockedContractName = 'com.org1.contract.StateUpdater';
  const mockedFunctionName = 'com.org1.function.TestFunction';
  const mockedAssetId = `mockedAssetId${Date.now()}`;
  const mockedState = 1;
  const mockedContractArgument = {
    asset_id: mockedAssetId,
    state: mockedState,
  };
  const contractProperty = {
    properties: 'bar',
  };
  const mockedByteContract = fs.readFileSync(
      path.join(__dirname, 'StateUpdater.class'),
  );
  const mockedByteFunction = fs.readFileSync(
      path.join(__dirname, 'TestFunction.class'),
  );

  clientService = new ClientService(properties);

  describe('registerCertificate', () => {
    it('should be successful', async () => {
      const response = await clientService.registerCertificate();
      assert.deepEqual(response, undefined);
    });
  });
  describe('registerFunction', () => {
    it('should be successful', async () => {
      const response = await clientService.registerFunction(
          mockedFunctionId,
          mockedFunctionName,
          mockedByteFunction,
      );
      assert.deepEqual(response, undefined);
    });
  });
  describe('registerContract', () => {
    it('should be successful', async () => {
      const response = await clientService.registerContract(
          mockedContractId,
          mockedContractName,
          mockedByteContract,
          contractProperty,
      );
      assert.deepEqual(response, undefined);
    });
  });
  describe('listContracts', () => {
    it(
        'should return contract metadata' +
        'when the correct contract id is specified',
        async () => {
          const response = await clientService.listContracts();
          assert.ok(response.hasOwnProperty(mockedContractId));
        },
    );
  });
  describe('executeContract', () => {
    it(
        'should work as expected when executing a registered contract',
        async () => {
          const response = await clientService.executeContract(
              mockedContractId,
              mockedContractArgument,
              {},
          );

          const contractResult = response.result;
          assert.equal(contractResult.asset_id, mockedAssetId);
          assert.equal(contractResult.state, mockedState);
          assert.equal(contractResult.properties, contractProperty.properties);
        },
    );

    it(
        'should execute the function properly and cassandra' +
        'query should return proper object when correct inputs are specified',
        async () => {
          const contractArgumentWithFunction = {
            asset_id: mockedAssetId,
            state: Date.now(),
            _functions_: [mockedFunctionId],
          };
          const mockedFunctionArgument = {
            asset_id: mockedAssetId,
            state: mockedState,
          };
          const response = await clientService.executeContract(
              mockedContractId,
              contractArgumentWithFunction,
              mockedFunctionArgument,
          );
          assert.equal(
              response.getResult().state,
              contractArgumentWithFunction.state,
          );
          cassandraClient = new cassandra.Client({
            contactPoints: ['localhost'],
            localDataCenter: 'dc1',
          });
          const cassandraResponse = await cassandraClient.execute(
              `SELECT * FROM foo.bar WHERE column_a='${mockedAssetId}';`,
          );
          assert.equal(
              cassandraResponse.rows[0].column_a,
              contractArgumentWithFunction.asset_id,
          );
          await cassandraClient.shutdown();
        },
    );
  });
  describe('validateLedger', () => {
    it('should return 200 when correct asset id is specified', async () => {
      const response = await clientService.validateLedger(mockedAssetId);
      assert.equal(response.getCode(), 200);
    });
    it(
        'should return 200 when correct asset id, ' +
        'startAge and endAge are specified',
        async () => {
          const response = await clientService.validateLedger(
              mockedAssetId,
              0,
              1,
          );
          assert.equal(response.getCode(), 200);
        },
    );
  });
});
