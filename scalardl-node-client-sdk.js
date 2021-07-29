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
const {
  LedgerClient,
  LedgerPrivilegedClient,
  AuditorClient,
  AuditorPrivilegedClient,
} = require('./scalar_grpc_pb');
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
  const auditorEnabled = clientProperties.getAuditorEnabled();
  const auditorClientUrl =
    `${clientProperties.getAuditorHost()}:` +
    `${clientProperties.getAuditorPort()}`;
  const auditorPrivilegedClientUrl =
    `${clientProperties.getAuditorHost()}:` +
    `${clientProperties.getAuditorPrivilegedPort()}`;
  const ca = clientProperties.getTlsCaRootCertPem();
  const tlsEnabled = clientProperties.getTlsEnabled();

  let grpcChannelCredentials;
  if (tlsEnabled) {
    if (ca) {
      // Use custom root CA
      grpcChannelCredentials =
        grpc.credentials.createSsl(Buffer.from(ca, 'utf8'));
    } else {
      // When no custom root CA is provided to init the SSL/TLS connection,
      // default root CA maintained by Node.js will be used
      grpcChannelCredentials = grpc.credentials.createSsl();
    }
  } else {
    grpcChannelCredentials = grpc.credentials.createInsecure();
  }

  const ledgerClient =
    new LedgerClient(ledgerClientUrl, grpcChannelCredentials);
  const ledgerPrivilegedClient =
    new LedgerPrivilegedClient(
        ledgerPrivilegedClientUrl,
        grpcChannelCredentials);

  let auditorClient;
  let auditorPrivilegedClient;
  if (auditorEnabled) {
    auditorClient = new AuditorClient(
        auditorClientUrl,
        grpcChannelCredentials,
    );
    auditorPrivilegedClient = new AuditorPrivilegedClient(
        auditorPrivilegedClientUrl,
        grpcChannelCredentials,
    );
  }

  return {
    'ledgerClient': ledgerClient,
    'ledgerPrivileged': ledgerPrivilegedClient,
    'auditorClient': auditorClient,
    'auditorPrivileged': auditorPrivilegedClient,
  };
}

/**
 * Create the grpc request metadata
 * @param {Object} properties
 * @return {module:grpc.Metadata} create metadata
 * @private
 */
function _createMetadata(properties) {
  const clientProperties = new ClientProperties(properties);
  const metadata = new grpc.Metadata();
  if (clientProperties.getAuthorizationCredential()) {
    metadata.set('authorization',
        clientProperties.getAuthorizationCredential());
  }
  return metadata;
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
        _createMetadata(properties),
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

    return super._registerCertificate(request);
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

    return super._registerFunction(request);
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

    return super._registerContract(request);
  }

  /**
   * @param {Uint8Array} serializedBinary
   *   a serialized byte array of ContractsListingRequest
   * @return {Promise<!proto.google.protobuf.ContractsListingResponse>}
   */
  async listContracts(serializedBinary) {
    const request =
      this.ledgerClient.listContracts.requestDeserialize(serializedBinary);

    return super._listContracts(request);
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

    return super._validateLedger(request);
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

    return super._executeContract(request);
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
        _createMetadata(properties),
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
