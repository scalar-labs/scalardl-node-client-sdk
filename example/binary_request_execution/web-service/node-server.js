const express = require('express');
const {
  ClientServiceWithBinary,
} = require('@scalar-labs/scalardl-node-client-sdk');
const cors = require('cors');
const app = express();
const nodeServerPort = 3002;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());
app.listen(nodeServerPort,
    () => console.log(`App listening at http://localhost:${nodeServerPort}`));
const properties = {
  'scalar.dl.client.server.host': '127.0.0.1',
  'scalar.dl.client.server.port': 50051,
  
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

const registerCertificateFunction = (async (serializedBinary) => {
  const webService = new ClientServiceWithBinary(properties);
  try {
    return await webService.registerCertificate(
        Uint8Array.from(Buffer.from(serializedBinary, 'binary')));
  } catch (e) {
    throw new Error(`${e.message}`);
  }
});

const registerContractsFunction = (async (serializedBinary) => {
  const webService = new ClientServiceWithBinary(properties);
  try {
    return await webService.registerContract(
        Uint8Array.from(Buffer.from(serializedBinary, 'binary')));
  } catch (e) {
    throw new Error(`${e.message}`);
  }
});

const listContractsFunction = (async (serializedBinary) => {
  const webService = new ClientServiceWithBinary(properties);
  try {
    return await webService.listContracts(
        Uint8Array.from(Buffer.from(serializedBinary, 'binary')));
  } catch (e) {
    throw new Error(`${e.message}`);
  }
});

let result;
app.post('/register-certificate', async (req, res) => {
  const receivedBinaryRequest = req.body.bin;
  try {
    result = await registerCertificateFunction(receivedBinaryRequest);
    res.send(result);
  } catch (e) {
    console.error(e.message);
    res.status(400 + Number(e.message.charAt(0))).send({error: e.message});
  }
});

app.post('/register-contracts', async (req, res) => {
  const receivedBinaryRequest = req.body.bin;
  try {
    const result = await registerContractsFunction(receivedBinaryRequest);
    res.send(result);
  } catch (e) {
    console.error(e.message);
    res.status(400 + Number(e.message.charAt(0))).send({error: e.message});
  }
});

app.post('/list-contracts', async (req, res) => {
  const receivedBinaryRequest = req.body.bin;
  try {
    const result = await listContractsFunction(receivedBinaryRequest);
    res.send(result);
  } catch (e) {
    console.error(e.message);
    res.status(400 + Number(e.message.charAt(0))).send({error: e.message});
  }
});
