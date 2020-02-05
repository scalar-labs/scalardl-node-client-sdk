const {
  ClientServiceBase,
  StatusCode,
} = require('@scalar-labs/scalardl-javascript-sdk-base');

const protobuf = require('./scalar_pb');
const {LedgerClient, LedgerPrivilegedClient} = require('./scalar_grpc_pb');
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
    const ledgerClientUrl =
      `${properties['scalar.dl.client.server.host']}:` +
      `${properties['scalar.dl.client.server.port']}`;
    const ledgerPrivilegedClientUrl =
      `${properties['scalar.dl.client.server.host']}:` +
      `${properties['scalar.dl.client.server.privileged_port']}`;
    const ca = properties['scalar.dl.client.tls.ca_root_cert_pem'];
    const tlsEnabled = properties['scalar.dl.client.tls.enabled'];
    let ledgerClient;
    let ledgerPrivilegedClient;
    if (tlsEnabled) {
      ledgerClient = new LedgerClient(ledgerClientUrl,
          grpc.credentials.createSsl(Buffer.from(ca, 'utf8')));
      ledgerPrivilegedClient = new LedgerPrivilegedClient(ledgerClientUrl,
          grpc.credentials.createSsl(Buffer.from(ca, 'utf8')));
    } else {
      ledgerClient = new LedgerClient(ledgerClientUrl,
          grpc.credentials.createInsecure());
      ledgerPrivilegedClient = new LedgerPrivilegedClient(
          ledgerPrivilegedClientUrl,
          grpc.credentials.createInsecure());
    }
    const services = {
      'ledgerClient': ledgerClient,
      'ledgerPrivileged': ledgerPrivilegedClient,
    };
    super(services, protobuf, properties);
  }
}

module.exports = {
  ClientService,
  StatusCode,
};
