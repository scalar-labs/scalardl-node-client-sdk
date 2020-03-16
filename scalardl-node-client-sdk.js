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
      ledgerClient = new LedgerClient(
          ledgerClientUrl,
          grpc.credentials.createSsl(Buffer.from(ca, 'utf8')),
      );
      ledgerPrivilegedClient = new LedgerPrivilegedClient(
          ledgerClientUrl,
          grpc.credentials.createSsl(Buffer.from(ca, 'utf8')),
      );
    } else {
      ledgerClient = new LedgerClient(
          ledgerClientUrl,
          grpc.credentials.createInsecure(),
      );
      ledgerPrivilegedClient = new LedgerPrivilegedClient(
          ledgerPrivilegedClientUrl,
          grpc.credentials.createInsecure(),
      );
    }
    const services = {
      'ledgerClient': ledgerClient,
      'ledgerPrivileged': ledgerPrivilegedClient,
    };
    super(services, protobuf, properties);
  }

  /**
   * @param {Uint8Array} serializedBinary
   */
  registerCertificate(serializedBinary) {
    const request = this.ledgerPrivilegedClient.registerCert.requestDeserialize(
        serializedBinary,
    );
    this.ledgerPrivilegedClient.registerCert(request);
  }

  /**
   * @param {Uint8Array} serializedBinary
   */
  registerFunction(serializedBinary) {
    const request =
      this.ledgerPrivilegedClient.registerFunction.requestDeserialize(
          serializedBinary,
      );
    this.ledgerPrivilegedClient.registerFunction(request);
  }

  /**
   * @param {Uint8Array} serializedBinary
   */
  registerContract(serializedBinary) {
    const request =
      this.ledgerClient.registerContract.requestDeserialize(serializedBinary);
    this.ledgerClient.registerContract(request);
  }

  /**
   * @param {Uint8Array} serializedBinary
   */
  listContracts(serializedBinary) {
    const request =
      this.ledgerClient.listContracts.requestDeserialize(serializedBinary);
    this.ledgerClient.listContracts(request);
  }

  /**
   * @param {Uint8Array} serializedBinary
   */
  validateLedger(serializedBinary) {
    const request =
      this.ledgerClient.validateLedger.requestDeserialize(serializedBinary);
    this.ledgerClient.validateLedger(request);
  }

  /**
   * @param {Uint8Array} serializedBinary
   */
  executeContract(serializedBinary) {
    const request = this.ledgerClient.exec.requestDeserialize(serializedBinary);
    this.ledgerClient.executeContract(request);
  }
}

module.exports = {
  ClientService,
  StatusCode,
};
