const {
  ClientServiceBase,
  StatusCode,
} = require('@scalar-labs/scalardl-javascript-sdk-base');

const protobuf = require('./scalar_pb');
const {LedgerClient} = require('./scalar_grpc_pb');
const grpc = require('grpc');

/**
 * @class
 */
class ClientService extends ClientServiceBase {
  /**
   * Constructor will inject dependencies to generate ClientService
   * @param {Object} properties
   */
  constructor(properties) {
    const url = `${properties['scalar.ledger.client.server_host']}:` +
      `${properties['scalar.ledger.client.server_port']}`;
    const ca = properties['scalar.ledger.client.tls.ca_root_cert'];
    const tlsEnabled = properties['scalar.ledger.client.tls.enabled'];
    let ledgerClient;
    if (tlsEnabled) {
      ledgerClient = new LedgerClient(url,
          grpc.credentials.createSsl(Buffer.from(ca, 'utf8')));
    } else {
      ledgerClient = new LedgerClient(url, grpc.credentials.createInsecure());
    }

    super(ledgerClient, protobuf, properties);
  }
}

module.exports = {
  ClientService,
  StatusCode,
};
