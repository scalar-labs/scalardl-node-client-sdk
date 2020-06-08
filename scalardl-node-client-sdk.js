const {
  ClientServiceBase,
  StatusCode,
  ContractExecutionResult,
  LedgerValidationResult,
  AssetProof,
  ClientError,
  ClientPropertiesField,
  ClientProperties,
} = require('@scalar-labs/scalardl-javascript-sdk-base');

const protobuf = require('./scalar_pb');
const {LedgerClient, LedgerPrivilegedClient} = require('./scalar_grpc_pb');
const grpc = require('grpc');

const {SignerFactory} = require('./signer');


/**
 * @param {Object} properties
 * @return {Object}
 */
function _createGrpcServices(properties) {
  const clientProperties = new ClientProperties(
      properties,
      [
        ClientPropertiesField.SERVER_HOST,
        ClientPropertiesField.SERVER_PORT,
        ClientPropertiesField.SERVER_PRIVILEGED_PORT,
      ],
  );

  const ledgerClientUrl =
    `${clientProperties.getServerHost()}:${clientProperties.getServerPort()}`;
  const ledgerPrivilegedClientUrl =
    `${clientProperties.getServerHost()}:` +
    `${clientProperties.getServerPrivilegedPort()}`;
  const ca = clientProperties.getTlsCaRootCertPem();
  const tlsEnabled = clientProperties.getTlsEnabled();
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
    super(
        {
          ..._createGrpcServices(properties),
          signerFactory: new SignerFactory(),
        },
        protobuf,
        properties,
    );
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
              reject(this._handleError(err));
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
              reject(this._handleError(err));
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
              reject(this._handleError(err));
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
              reject(this._handleError(err));
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
              reject(this._handleError(err));
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
              reject(this._handleError(err));
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

  /**
   * @param {Error} error
   * @return {ClientError}
   */
  _handleError(error) {
    let code = StatusCode.UNKNOWN_TRANSACTION_STATUS;
    let message = error.message;
    const status = this._parseStatusFromError(error);
    if (status) {
      code = status.code;
      message = status.message;
    }

    return new ClientError(code, message);
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
    super(
        {
          ..._createGrpcServices(properties),
          signerFactory: new SignerFactory(),
        },
        protobuf,
        properties,
    );
  }
}

module.exports = {
  ClientService,
  ClientServiceWithBinary,
  StatusCode,
  ContractExecutionResult,
  LedgerValidationResult,
  AssetProof,
  ClientError,
};
