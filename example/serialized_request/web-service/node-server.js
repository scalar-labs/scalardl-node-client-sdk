const express = require('express');
const {
  ClientServiceWithBinary,
  ClientError,
} = require('@scalar-labs/scalardl-node-client-sdk');
const cors = require('cors');
const app = express();
const nodeServerPort = 3002;
const bodyParser = require('body-parser');
app.use(bodyParser.raw({type: 'application/octet-stream'}));
app.use(cors());
app.listen(nodeServerPort,
    () => console.log(
        `Web-server listening at http://localhost:${nodeServerPort}`));

// Node SDK configuration properties
const binaryClientProperties = {
  'scalar.dl.client.server.host': '127.0.0.1',
  'scalar.dl.client.server.port': 50051,
  'scalar.dl.client.server.privileged_port': 50052,
};
const binaryClientService = new ClientServiceWithBinary(
    binaryClientProperties);

app.post('/register-certificate', async (req, res) => {
  const serializedRequest = req.body;
  try {
    await binaryClientService.registerCertificate(serializedRequest);
    res.sendStatus(200);
  } catch (e) {
    handleError(res, e);
  }
});

app.post('/register-contracts', async (req, res) => {
  const serializedRequest = req.body;
  try {
    await binaryClientService.registerContract(serializedRequest);
    res.sendStatus(200);
  } catch (e) {
    handleError(res, e);
  }
});

app.post('/list-contracts', async (req, res) => {
  const serializedRequest = req.body;
  try {
    const result = await binaryClientService.listContracts(serializedRequest);
    res.send(result);
  } catch (e) {
    handleError(res, e);
  }
});

/**
 * Handle the Scalar DL client error
 * @param {Object} res the response
 * @param {ClientError} e  the error
 */
function handleError(res, e) {
  console.error(e);
  res.status(e.code)
      .send({error: e.message});
}
