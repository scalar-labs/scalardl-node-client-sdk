const {
  ClientServiceWithBinary,
  StatusCode,
} = require('../scalardl-node-client-sdk');
const fs = require('fs');
const cassandra = require('cassandra-driver');
const assert = require('assert');

const properties = {
  'scalar.dl.client.server.host': 'localhost',
  'scalar.dl.client.server.port': 50051,
  'scalar.dl.client.server.privileged_port': 50052,
  'scalar.dl.client.cert_holder_id': `foo@${Date.now()}`,
  'scalar.dl.client.cert_version': 1,
  'scalar.dl.client.tls.enabled': false,
  'scalar.dl.client.tls.ca_root_cert_pem': '-----BEGIN CERTIFICATE-----\n' +
  'MIIE/jCCAuagAwIBAgIJAJO8tpVEEORLMA0GCSqGSIb3DQEBCwUAMBQxEjAQBgNV\n' +
  'BAMMCWxvY2FsaG9zdDAeFw0xOTAzMTMxMDUyMTFaFw0yMDAzMTIxMDUyMTFaMBQx\n' +
  'EjAQBgNVBAMMCWxvY2FsaG9zdDCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoC\n' +
  'ggIBAKFeFSrXRh5jA+OodMPw0XFO4sd4G9wYERlxgCjDmd9eC+loLpjGwRwwO7os\n' +
  '/+rhW+Cg/NGhNn64xCmS/JtZf91SBD1QfQ4wk4094sAUIHsztaWtZTATl6aIy0BN\n' +
  '21A0ueFgVQGehwO1FdRKtS7X+45YV2vMMK/UQ69VSCwY82olBRgWp45TXLUmWVgC\n' +
  'UAJkE/V2Ch8WLyKpCggtaxYmn8YfzA1X20QDK1b2IW4YPDcPapQLtU6wqIjrXX1E\n' +
  'w992GgfERm//I14QEyu+qIPafsniDGYxiR6HK8nqeR70QcGHt+Qql24xyjwWHEA/\n' +
  '43pn3jjrNVRhiVAD8tkVyRmfWjIngksRHPwEh3jG34gshOi9xAaID+mx2AWhThsk\n' +
  'XbuqSxHckPlvgWHugZmFOwKZAgU5/gpnWR7oHPOSYffhGwmc/+SK/SQ4UDeTFI2c\n' +
  '40Xw22P8CWbIq4gKi66kSvuFbLSeKQIRMJd50hf7kw3SqnkqEaeRXy5jBovut7CU\n' +
  'nwcgGPceYmWhKxhkg5urzk+CQZENf+9+pVvArOQemn9bMuaBPwtwXE42+fktQpQ2\n' +
  'PG3k7ryVL5R0jhuVNXf9ioU2z1ONQ2IdsuFtCKnozfVBAhy9bPfm120rTV/UBOCD\n' +
  'zcmfRnv081lG9BN/KtZBo7hfFH/ZD2542yVRvibRIIdPWIkTAgMBAAGjUzBRMB0G\n' +
  'A1UdDgQWBBQ61fQAtAgd7sM/NDtIX4D8GSA/8DAfBgNVHSMEGDAWgBQ61fQAtAgd\n' +
  '7sM/NDtIX4D8GSA/8DAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IC\n' +
  'AQCaYh1bxlj9Impoq3rmFHl5/9Fb2o2H2Ne8VjTHb8eSoHuLwXdWzKnw6UhiCaN4\n' +
  'EZgrsqq1L2Tc8Y+eqT4gz3uDLc5Cj29HHC/suZezIo3lgyZ/A6stYQXE5Gy8e+to\n' +
  'Qhmf4u8RMZ8zt6i355un6mTJxJq7JxoVqpECf5tg6pMdOUzbcKLTmN6i50jH/PSO\n' +
  'NQsJhiSJg3caNdWviob+UwEuUineMF/X08dB3gphZ7kmfDeRjmONALMXS1uvPwk2\n' +
  '3s8S45LmxETx+tcJSvckKRC9JaQf6dgHfKAWHpkIqvLKyqy9Dmvg2RSJi3kI9oaj\n' +
  'dm64zc6CAsqVaPvoMfWIN7JZq9jvzc8msGiilfhiYoc+M3jvnmM81FuGbAw7Utq4\n' +
  'uuHtpCcpbxRMChD4WdlrPeBONyBKp+RRWTGfBY1GW5aGWVp/cbcpIc2RSgnZcrxb\n' +
  '6ef2iTMtUjRd76JlkobTyvgo0GKdLgnr8c711I2YNp+TabKIKZOEvw2X+oGbfxBN\n' +
  '1WvRB5YJo2rzwZj0fSvN9IwT9TGxSZIo5zcaQuwLEmDZBJShgXN5Ya71Vag1AP2i\n' +
  'mOwUJRvfTVPWg+wtF2JQwaPpK0+Kb7oCq9tl3PUW40FRgqWV1Tgp6Co/U1W/1BU6\n' +
  '02Vmic/M/HmRMwWuX1PyVOVr8Mjyj+OMF1JsmdR5eL5Mtg==\n' +
  '-----END CERTIFICATE-----\n',

  'scalar.dl.client.private_key_pem': '-----BEGIN EC PRIVATE KEY-----\n' +
  'MHcCAQEEICcJGMEw3dyXUGFu/5a36HqY0ynZi9gLUfKgYWMYgr/IoAoGCCqGSM49\n' +
  'AwEHoUQDQgAEBGuhqumyh7BVNqcNKAQQipDGooUpURve2dO66pQCgjtSfu7lJV20\n' +
  'XYWdrgo0Y3eXEhvK0lsURO9N0nrPiQWT4A==\n-----END EC PRIVATE KEY-----\n',
  'scalar.dl.client.cert_pem': '-----BEGIN CERTIFICATE-----\n' +
  'MIICizCCAjKgAwIBAgIUMEUDTdWsQpftFkqs6bCd6U++4nEwCgYIKoZIzj0EAwIw\n' +
  'bzELMAkGA1UEBhMCSlAxDjAMBgNVBAgTBVRva3lvMQ4wDAYDVQQHEwVUb2t5bzEf\n' +
  'MB0GA1UEChMWU2FtcGxlIEludGVybWVkaWF0ZSBDQTEfMB0GA1UEAxMWU2FtcGxl\n' +
  'IEludGVybWVkaWF0ZSBDQTAeFw0xODA5MTAwODA3MDBaFw0yMTA5MDkwODA3MDBa\n' +
  'MEUxCzAJBgNVBAYTAkFVMRMwEQYDVQQIEwpTb21lLVN0YXRlMSEwHwYDVQQKExhJ\n' +
  'bnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQwWTATBgcqhkjOPQIBBggqhkjOPQMBBwNC\n' +
  'AAQEa6Gq6bKHsFU2pw0oBBCKkMaihSlRG97Z07rqlAKCO1J+7uUlXbRdhZ2uCjRj\n' +
  'd5cSG8rSWxRE703Ses+JBZPgo4HVMIHSMA4GA1UdDwEB/wQEAwIFoDATBgNVHSUE\n' +
  'DDAKBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAAMB0GA1UdDgQWBBRDd2MS9Ndo68PJ\n' +
  'y9K/RNY6syZW0zAfBgNVHSMEGDAWgBR+Y+v8yByDNp39G7trYrTfZ0UjJzAxBggr\n' +
  'BgEFBQcBAQQlMCMwIQYIKwYBBQUHMAGGFWh0dHA6Ly9sb2NhbGhvc3Q6ODg4OTAq\n' +
  'BgNVHR8EIzAhMB+gHaAbhhlodHRwOi8vbG9jYWxob3N0Ojg4ODgvY3JsMAoGCCqG\n' +
  'SM49BAMCA0cAMEQCIC/Bo4oNU6yHFLJeme5ApxoNdyu3rWyiqWPxJmJAr9L0AiBl\n' +
  'Gc/v+yh4dHIDhCrimajTQAYOG9n0kajULI70Gg7TNw==\n-----END CERTIFICATE-----\n',
};

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

const clientService = new ClientServiceWithBinary(properties);

describe('Integration test on ClientServiceWithBinary', async () => {
  describe('registerCertificate', () => {
    it('should be successful', async () => {
      const binary =
        await clientService.createSerializedCertificateRegistrationRequest();

      assert.ok(binary instanceof Uint8Array);
      await assert.doesNotReject(clientService.registerCertificate(binary));
    });
    it('should get error if register certificate again', async () => {
      const binary =
        await clientService.createSerializedCertificateRegistrationRequest();
      await assert.rejects(
          clientService.registerCertificate(binary),
          (err) => {
            assert.equal(
                err.code,
                StatusCode.CERTIFICATE_ALREADY_REGISTERED,
            );
            return true;
          },
      );
    });
  });

  describe('registerFunction', () => {
    it('should be successful', async () => {
      const binary =
        await clientService.createSerializedFunctionRegistrationRequest(
            mockedFunctionId,
            mockedFunctionName,
            mockedByteFunction,
        );

      assert.ok(binary instanceof Uint8Array);
      await assert.doesNotReject(clientService.registerFunction(binary));
    });
  });

  describe('registerContract', () => {
    it('should be successful', async () => {
      const binary =
        await clientService.createSerializedContractRegistrationRequest(
            mockedContractId,
            mockedContractName,
            mockedByteContract,
            contractProperty,
        );

      assert.ok(binary instanceof Uint8Array);
      await assert.doesNotReject(clientService.registerContract(binary));
    });
    it('should get error if register again', async () => {
      const binary =
        await clientService.createSerializedContractRegistrationRequest(
            mockedContractId,
            mockedContractName,
            mockedByteContract,
            contractProperty,
        );
      await assert.rejects(
          clientService.registerContract(binary),
          (err) => {
            assert.equal(
                err.code,
                StatusCode.CONTRACT_ALREADY_REGISTERED,
            );
            return true;
          },
      );
    });
  });

  describe('listContracts', () => {
    it('should return contract metadata ' +
    'when the correct contract id is specified',
    async () => {
      const binary =
        await clientService.createSerializedContractsListingRequest();
      const response = await clientService.listContracts(binary);
      const contracts = response;

      assert.ok(binary instanceof Uint8Array);
      assert.ok(contracts.hasOwnProperty(mockedContractId));
    });
    it('should get error if private key is incorrect', async () => {
      const anotherProperties = {
        ...properties,
        ...{
          'scalar.dl.client.private_key_pem':
          '-----BEGIN EC PRIVATE KEY-----\n' +
          'MHcCAQEEIIbElY/Vs5nEoVGsHZ8G9icxZcsRlT2DcHIfxFNkZrnHoAoGCCqGSM49\n' +
          'AwEHoUQDQgAE/TzGEcYJNcwe5d+BlPuxuwiIhMhKpMpTMZM94L+bRhDPFn4nMigc\n' +
          'Cijley7qhOfwplVrTtnNLTNMD82ttwnR7g==\n' +
          '-----END EC PRIVATE KEY-----\n',
        },
      };
      const anotherClientService =
        new ClientServiceWithBinary(anotherProperties);

      const binary =
        await anotherClientService.createSerializedContractsListingRequest();
      await assert.rejects(
          anotherClientService.listContracts(binary),
          (err) => {
            assert.equal(
                err.code,
                StatusCode.INVALID_SIGNATURE,
            );
            return true;
          },
      );
    });
  });

  describe('executeContract', () => {
    it('should work as expected when executing a registered contract',
        async () => {
          const binary =
            await clientService.createSerializedContractExecutionRequest(
                mockedContractId,
                mockedContractArgument,
                {},
            );
          const response = await clientService.executeContract(binary);
          const result = response.getResult();

          assert.ok(binary instanceof Uint8Array);
          assert.equal(result.asset_id, mockedAssetId);
          assert.equal(result.state, mockedState);
          assert.equal(result.properties, contractProperty.properties);
        },
    );
    it('should get error if contract id does exist',
        async () => {
          const binary =
            await clientService.createSerializedContractExecutionRequest(
                'notexisting',
                mockedContractArgument,
                {},
            );
          await assert.rejects(
              clientService.executeContract(binary),
              (err) => {
                assert.equal(
                    err.code,
                    StatusCode.CONTRACT_NOT_FOUND,
                );
                return true;
              },
          );
        },
    );

    it(
        'should execute the function properly and cassandra ' +
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
          const binary =
            await clientService.createSerializedContractExecutionRequest(
                mockedContractId,
                contractArgumentWithFunction,
                mockedFunctionArgument,
            );
          const response = await clientService.executeContract(binary);
          const result = response.getResult();

          const cassandraClient = new cassandra.Client({
            contactPoints: ['127.0.0.1:9042'],
            localDataCenter: 'dc1',
          });
          const cassandraResponse = await cassandraClient.execute(
              `SELECT * FROM foo.bar WHERE column_a='${mockedAssetId}';`,
          );

          assert.equal(result.state, contractArgumentWithFunction.state);
          assert.equal(
              cassandraResponse.rows[0].column_a,
              contractArgumentWithFunction.asset_id,
          );
          await cassandraClient.shutdown();
        },
    );
  });

  describe('validateLedger', () => {
    it(
        'should return 200 when correct asset id and age is specified',
        async () => {
          const binary =
        await clientService.createSerializedLedgerValidationRequest(
            mockedAssetId, 0, 1,
        );
          const response = await clientService.validateLedger(binary);

          assert.ok(binary instanceof Uint8Array);
          assert.equal(response.getCode(), 200);
        },
    );
    it('should get error is holder id is incorrect', async () => {
      const anotherProperties = {
        ...properties,
        ...{
          'scalar.dl.client.cert_holder_id': 'whatever',
        },
      };
      const anotherClientService =
        new ClientServiceWithBinary(anotherProperties);

      const binary =
        await anotherClientService.createSerializedLedgerValidationRequest(
            mockedAssetId, 0, 1,
        );
      await assert.rejects(
          anotherClientService.validateLedger(binary),
          (err) => {
            assert.equal(
                err.code,
                StatusCode.CERTIFICATE_NOT_FOUND,
            );
            return true;
          },
      );
    });
  });

  describe('validateLedger in the auditor mode', () => {
    it('should return error when the auditor mode is enabled', async () => {
      const anotherProperties = {
        ...properties,
        ...{
          'scalar.dl.client.auditor.enabled': true,
        },
      };
      const anotherClientService = new ClientServiceWithBinary(
          anotherProperties,
      );

      const binary =
        await anotherClientService.createSerializedLedgerValidationRequest(
            mockedAssetId,
            0,
            1,
        );

      await assert.rejects(
          anotherClientService.validateLedger(binary),
          (err) => {
            assert.equal(
                err.message,
                'validateLedger with Auditor ' +
              'is not supported in the intermediary mode. ' +
              'Please execute ValidateLedger contract ' +
              'simply for validating assets.',
            );
            return true;
          },
      );
    });
  });
});
