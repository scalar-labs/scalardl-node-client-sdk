const {
  ClientServiceBase,
  StatusCode,
  ContractExecutionResult,
  LedgerValidationResult,
  AssetProof,
} = require('@scalar-labs/scalardl-javascript-sdk-base');

const protobuf = require('./scalar_pb');
const {LedgerClient, LedgerPrivilegedClient} = require('./scalar_grpc_pb');
const grpc = require('grpc');


/**
 * @param {Object} properties
 * @return {Object}
 */
function _createGrpcServices(properties) {
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

  return {
    'ledgerClient': ledgerClient,
    'ledgerPrivileged': ledgerPrivilegedClient,
  };
}

/**
 * @class
 */
class ClientServiceWithBinary extends ClientServiceBase {
  /**
   * Constructor will inject dependencies to generate ClientService
   * @param {Object} properties
   */
  constructor(properties) {
    super(_createGrpcServices(properties), protobuf, properties);
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of CertificateRegistrationRequest
   * @return {Promise<!proto.google.protobuf.Empty>}
   */
  async registerCertificate(serializedBinary) {
    const request = this.ledgerPrivileged.registerCert.requestDeserialize(
        serializedBinary,
    );

    return new Promise((resolve, reject) => {
      this.ledgerPrivileged.registerCert(
          request,
          this.metadata,
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          },
      );
    });
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of FunctionRegistrationRequest
   * @return {Promise<!proto.google.protobuf.Empty>}
   */
  async registerFunction(serializedBinary) {
    const request =
      this.ledgerPrivileged.registerFunction.requestDeserialize(
          serializedBinary,
      );

    return new Promise((resolve, reject) => {
      this.ledgerPrivileged.registerFunction(
          request,
          this.metadata,
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          },
      );
    });
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of ContractRegistrationRequest
   * @return {Promise<!proto.google.protobuf.Empty>}
   */
  async registerContract(serializedBinary) {
    const request = this.ledgerClient.registerContract.requestDeserialize(
        serializedBinary,
    );

    return new Promise((resolve, reject) => {
      this.ledgerClient.registerContract(
          request,
          this.metadata,
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          },
      );
    });
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of ContractsListingRequest
   * @return {Promise<!proto.google.protobuf.ContractsListingResponse>}
   */
  async listContracts(serializedBinary) {
    const request =
      this.ledgerClient.listContracts.requestDeserialize(serializedBinary);

    return new Promise((resolve, reject) => {
      this.ledgerClient.listContracts(
          request,
          this.metadata,
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(JSON.parse(response.getJson()));
            }
          },
      );
    });
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of LedgerValidationRequest
   * @return {Promise<!proto.google.protobuf.LedgerValidationResponse>}
   */
  async validateLedger(serializedBinary) {
    const request = this.ledgerClient.validateLedger.requestDeserialize(
        serializedBinary,
    );

    return new Promise((resolve, reject) => {
      this.ledgerClient.validateLedger(
          request,
          this.metadata,
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(
                  LedgerValidationResult.fromGrpcLedgerValidationResponse(
                      response,
                  ),
              );
            }
          },
      );
    });
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of ContractExecutionRequest
   * @return {Promise<!proto.google.protobuf.ContractExecutionResponse>}
   */
  async executeContract(serializedBinary) {
    const request = this.ledgerClient.executeContract.requestDeserialize(
        serializedBinary,
    );

    return new Promise((resolve, reject) => {
      this.ledgerClient.executeContract(
          request,
          this.metadata,
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(
                  ContractExecutionResult.fromGrpcContractExecutionResponse(
                      response,
                  ),
              );
            }
          },
      );
    });
  }
}

/**
 * @class
 */
class ClientService extends ClientServiceBase {
  /**
   * Constructor will inject dependencies to generate ClientService
   * @param {Object} properties
   */
  constructor(properties) {
    super(_createGrpcServices(properties), protobuf, properties);
  }
}

module.exports = {
  ClientService,
  ClientServiceWithBinary,
  StatusCode,
  ContractExecutionResult,
  LedgerValidationResult,
  AssetProof,
};
