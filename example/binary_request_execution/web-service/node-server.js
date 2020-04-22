const express = require('express');
const {
  ClientServiceWithBinary,
} = require('@scalar-labs/scalardl-node-client-sdk');
const cors = require('cors');
const app = express();
const nodeServerPort = 3002;
const bodyParser = require('body-parser');
app.use(bodyParser.raw({type: 'application/octet-stream'}));
app.use(cors());
app.listen(nodeServerPort,
    () => console.log(`App listening at http://localhost:${nodeServerPort}`));
const properties = {
  'scalar.dl.client.server.host': '127.0.0.1',
  'scalar.dl.client.server.port': 50051,
  'scalar.dl.client.server.privileged_port': 50052,
};

const registerCertificateFunction = (async (serializedBinary) => {
  const webService = new ClientServiceWithBinary(properties);
  try {
    return await webService.registerCertificate(serializedBinary);
  } catch (e) {
    throw new Error(`${e.message}`);
  }
});

const registerContractsFunction = (async (serializedBinary) => {
  const webService = new ClientServiceWithBinary(properties);
  try {
    return await webService.registerContract(serializedBinary);
  } catch (e) {
    throw new Error(`${e.message}`);
  }
});

const listContractsFunction = (async (serializedBinary) => {
  const webService = new ClientServiceWithBinary(properties);
  try {
    return await webService.listContracts(serializedBinary);
  } catch (e) {
    throw new Error(`${e.message}`);
  }
});

let result;
app.post('/register-certificate', async (req, res) => {
  const receivedBinaryRequest = req.body;
  try {
    result = await registerCertificateFunction(receivedBinaryRequest);
    res.send(result);
  } catch (e) {
    console.error(e.message);
    res.status(400 + Number(e.message.charAt(0))).send({error: e.message});
  }
});

app.post('/register-contracts', async (req, res) => {
  const receivedBinaryRequest = req.body;
  try {
    const result = await registerContractsFunction(receivedBinaryRequest);
    res.send(result);
  } catch (e) {
    console.error(e.message);
    res.status(400 + Number(e.message.charAt(0))).send({error: e.message});
  }
});

app.post('/list-contracts', async (req, res) => {
  const receivedBinaryRequest = req.body;
  try {
    const result = await listContractsFunction(receivedBinaryRequest);
    res.send(result);
  } catch (e) {
    console.error(e.message);
    res.status(400 + Number(e.message.charAt(0))).send({error: e.message});
  }
});
