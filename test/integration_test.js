const {
  ClientService,
} = require('../scalardl-node-client-sdk');
const fs = require('fs');
const cassandra = require('cassandra-driver');
const assert = require('assert');

const properties = {
  'scalar.ledger.client.server_host': 'localhost',
  'scalar.ledger.client.server_port': 50051,
  'scalar.ledger.client.server_privileged_port': 50052,
  'scalar.ledger.client.cert_holder_id': `foo@${Date.now()}`, // Make the test idempotent.
  'scalar.ledger.client.private_key_pem': '-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEICcJGMEw3dyXUGFu/5a36HqY0ynZi9gLUfKgYWMYgr/IoAoGCCqGSM49\nAwEHoUQDQgAEBGuhqumyh7BVNqcNKAQQipDGooUpURve2dO66pQCgjtSfu7lJV20\nXYWdrgo0Y3eXEhvK0lsURO9N0nrPiQWT4A==\n-----END EC PRIVATE KEY-----\n',
  'scalar.ledger.client.cert_pem': '-----BEGIN CERTIFICATE-----\nMIICizCCAjKgAwIBAgIUMEUDTdWsQpftFkqs6bCd6U++4nEwCgYIKoZIzj0EAwIw\nbzELMAkGA1UEBhMCSlAxDjAMBgNVBAgTBVRva3lvMQ4wDAYDVQQHEwVUb2t5bzEf\nMB0GA1UEChMWU2FtcGxlIEludGVybWVkaWF0ZSBDQTEfMB0GA1UEAxMWU2FtcGxl\nIEludGVybWVkaWF0ZSBDQTAeFw0xODA5MTAwODA3MDBaFw0yMTA5MDkwODA3MDBa\nMEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJ\nbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNC\nAAQEa6Gq6bKHsFU2pw0oBBCKkMaihSlRG97Z07rqlAKCO1J+7uUlXbRdhZ2uCjRj\nd5cSG8rSWxRE703Ses+JBZPgo4HVMIHSMA4GA1UdDwEB/wQEAwIFoDATBgNVHSUE\nDDAKBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBRDd2MS9Ndo68PJ\ny9K/RNY6syZW0zAfBgNVHSMEGDAWgBR+Y+v8yByDNp39G7trYrTfZ0UjJzAxBggr\nBgEFBQcBAQQlMCMwIQYIKwYBBQUHMAGGFWh0dHA6Ly9sb2NhbGhvc3Q6ODg4OTAq\nBgNVHR8EIzAhMB+gHaAbhhlodHRwOi8vbG9jYWxob3N0Ojg4ODgvY3JsMAoGCCqG\nSM49BAMCA0cAMEQCIC/Bo4oNU6yHFLJeme5ApxoNdyu3rWyiqWPxJmJAr9L0AiBl\nGc/v+yh4dHIDhCrimajTQAYOG9n0kajULI70Gg7TNw==\n-----END CERTIFICATE-----\n',
  'scalar.ledger.client.cert_version': 1,
  'scalar.ledger.client.tls.enabled': false,
  'scalar.ledger.client.tls.ca_root_cert': '-----BEGIN CERTIFICATE-----\nMIIE/jCCAuagAwIBAgIJAJO8tpVEEORLMA0GCSqGSIb3DQEBCwUAMBQxEjAQBgNV\nBAMMCWxvY2FsaG9zdDAeFw0xOTAzMTMxMDUyMTFaFw0yMDAzMTIxMDUyMTFaMBQx\nEjAQBgNVBAMMCWxvY2FsaG9zdDCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoC\nggIBAKFeFSrXRh5jA+OodMPw0XFO4sd4G9wYERlxgCjDmd9eC+loLpjGwRwwO7os\n/+rhW+Cg/NGhNn64xCmS/JtZf91SBD1QfQ4wk4094sAUIHsztaWtZTATl6aIy0BN\n21A0ueFgVQGehwO1FdRKtS7X+45YV2vMMK/UQ69VSCwY82olBRgWp45TXLUmWVgC\nUAJkE/V2Ch8WLyKpCggtaxYmn8YfzA1X20QDK1b2IW4YPDcPapQLtU6wqIjrXX1E\nw992GgfERm//I14QEyu+qIPafsniDGYxiR6HK8nqeR70QcGHt+Qql24xyjwWHEA/\n43pn3jjrNVRhiVAD8tkVyRmfWjIngksRHPwEh3jG34gshOi9xAaID+mx2AWhThsk\nXbuqSxHckPlvgWHugZmFOwKZAgU5/gpnWR7oHPOSYffhGwmc/+SK/SQ4UDeTFI2c\n40Xw22P8CWbIq4gKi66kSvuFbLSeKQIRMJd50hf7kw3SqnkqEaeRXy5jBovut7CU\nnwcgGPceYmWhKxhkg5urzk+CQZENf+9+pVvArOQemn9bMuaBPwtwXE42+fktQpQ2\nPG3k7ryVL5R0jhuVNXf9ioU2z1ONQ2IdsuFtCKnozfVBAhy9bPfm120rTV/UBOCD\nzcmfRnv081lG9BN/KtZBo7hfFH/ZD2542yVRvibRIIdPWIkTAgMBAAGjUzBRMB0G\nA1UdDgQWBBQ61fQAtAgd7sM/NDtIX4D8GSA/8DAfBgNVHSMEGDAWgBQ61fQAtAgd\n7sM/NDtIX4D8GSA/8DAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IC\nAQCaYh1bxlj9Impoq3rmFHl5/9Fb2o2H2Ne8VjTHb8eSoHuLwXdWzKnw6UhiCaN4\nEZgrsqq1L2Tc8Y+eqT4gz3uDLc5Cj29HHC/suZezIo3lgyZ/A6stYQXE5Gy8e+to\nQhmf4u8RMZ8zt6i355un6mTJxJq7JxoVqpECf5tg6pMdOUzbcKLTmN6i50jH/PSO\nNQsJhiSJg3caNdWviob+UwEuUineMF/X08dB3gphZ7kmfDeRjmONALMXS1uvPwk2\n3s8S45LmxETx+tcJSvckKRC9JaQf6dgHfKAWHpkIqvLKyqy9Dmvg2RSJi3kI9oaj\ndm64zc6CAsqVaPvoMfWIN7JZq9jvzc8msGiilfhiYoc+M3jvnmM81FuGbAw7Utq4\nuuHtpCcpbxRMChD4WdlrPeBONyBKp+RRWTGfBY1GW5aGWVp/cbcpIc2RSgnZcrxb\n6ef2iTMtUjRd76JlkobTyvgo0GKdLgnr8c711I2YNp+TabKIKZOEvw2X+oGbfxBN\n1WvRB5YJo2rzwZj0fSvN9IwT9TGxSZIo5zcaQuwLEmDZBJShgXN5Ya71Vag1AP2i\nmOwUJRvfTVPWg+wtF2JQwaPpK0+Kb7oCq9tl3PUW40FRgqWV1Tgp6Co/U1W/1BU6\n02Vmic/M/HmRMwWuX1PyVOVr8Mjyj+OMF1JsmdR5eL5Mtg==\n-----END CERTIFICATE-----\n',
};
let clientService;
let cassandraClient;

describe('Integration test on ClientService', async () => {
  const mockedFunctionId = 'TestFunction';
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
    __dirname + '/StateUpdater.class');
  const mockedByteFunction = fs.readFileSync(
    __dirname + '/TestFunction.class');

  clientService = new ClientService(properties);
  describe('registerCertificate', () => {
    it('should be successful', async () => {
      const response = await clientService.registerCertificate();
      assert.deepEqual(response, {});
    });
  });
  describe('registerFunction', () => {
    it('should be successful', async () => {
      const response = await clientService.registerFunction(mockedFunctionId,
          mockedFunctionName,
          mockedByteFunction);
      assert.deepEqual(response, {});
    });
  });
  describe('registerContract', () => {
    it('should be successful', async () => {
      const response = await clientService.registerContract(mockedContractId,
          mockedContractName,
          mockedByteContract, contractProperty);
      assert.deepEqual(response, {});
    });
  });
  describe('listContracts', () => {
    it('should return contract metadata when the correct contract id is specified', async () => {
      const response = await clientService.listContracts();
      assert.ok(response.hasOwnProperty(mockedContractId));
    });
  });
  describe('executeContract', () => {
    it('should work as expected when executing a registered contract',
        async () => {
          const response = await clientService.executeContract(
              mockedContractId,
              mockedContractArgument, {});

          const contractResult = response.result;
          assert.equal(contractResult.asset_id, mockedAssetId);
          assert.equal(contractResult.state, mockedState);
          assert.equal(contractResult.properties,
              contractProperty.properties);
        });

    it('should execute the function properly and cassandra query should return proper object when correct inputs are specified',
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
          assert.equal(response.result.state, contractArgumentWithFunction.state);
          cassandraClient = new cassandra.Client({
            contactPoints: ['127.0.0.1:9042'],
            localDataCenter: 'datacenter1',
          });
          const cassandraResponse = await cassandraClient.execute(
              `SELECT * FROM foo.bar WHERE column_a='${mockedAssetId}';`);
          assert.equal(cassandraResponse.rows[0].column_a,
              contractArgumentWithFunction.asset_id);
          await cassandraClient.shutdown();
        });
  });
  describe('validateLedger', () => {
    it('should return 200 when correct asset id is specified', async () => {
      const response = await clientService.validateLedger(mockedAssetId);
      assert.equal(response.statusCode, 200);
    });
  });
});
