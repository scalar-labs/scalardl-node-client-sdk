// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var scalar_pb = require('./scalar_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_AssetProofRetrievalRequest(arg) {
  if (!(arg instanceof scalar_pb.AssetProofRetrievalRequest)) {
    throw new Error('Expected argument of type rpc.AssetProofRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_AssetProofRetrievalRequest(buffer_arg) {
  return scalar_pb.AssetProofRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_AssetProofRetrievalResponse(arg) {
  if (!(arg instanceof scalar_pb.AssetProofRetrievalResponse)) {
    throw new Error('Expected argument of type rpc.AssetProofRetrievalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_AssetProofRetrievalResponse(buffer_arg) {
  return scalar_pb.AssetProofRetrievalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_CertificateRegistrationRequest(arg) {
  if (!(arg instanceof scalar_pb.CertificateRegistrationRequest)) {
    throw new Error('Expected argument of type rpc.CertificateRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_CertificateRegistrationRequest(buffer_arg) {
  return scalar_pb.CertificateRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ContractExecutionRequest(arg) {
  if (!(arg instanceof scalar_pb.ContractExecutionRequest)) {
    throw new Error('Expected argument of type rpc.ContractExecutionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ContractExecutionRequest(buffer_arg) {
  return scalar_pb.ContractExecutionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ContractExecutionResponse(arg) {
  if (!(arg instanceof scalar_pb.ContractExecutionResponse)) {
    throw new Error('Expected argument of type rpc.ContractExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ContractExecutionResponse(buffer_arg) {
  return scalar_pb.ContractExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ContractRegistrationRequest(arg) {
  if (!(arg instanceof scalar_pb.ContractRegistrationRequest)) {
    throw new Error('Expected argument of type rpc.ContractRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ContractRegistrationRequest(buffer_arg) {
  return scalar_pb.ContractRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ContractsListingRequest(arg) {
  if (!(arg instanceof scalar_pb.ContractsListingRequest)) {
    throw new Error('Expected argument of type rpc.ContractsListingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ContractsListingRequest(buffer_arg) {
  return scalar_pb.ContractsListingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ContractsListingResponse(arg) {
  if (!(arg instanceof scalar_pb.ContractsListingResponse)) {
    throw new Error('Expected argument of type rpc.ContractsListingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ContractsListingResponse(buffer_arg) {
  return scalar_pb.ContractsListingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ExecutionAbortRequest(arg) {
  if (!(arg instanceof scalar_pb.ExecutionAbortRequest)) {
    throw new Error('Expected argument of type rpc.ExecutionAbortRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ExecutionAbortRequest(buffer_arg) {
  return scalar_pb.ExecutionAbortRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ExecutionAbortResponse(arg) {
  if (!(arg instanceof scalar_pb.ExecutionAbortResponse)) {
    throw new Error('Expected argument of type rpc.ExecutionAbortResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ExecutionAbortResponse(buffer_arg) {
  return scalar_pb.ExecutionAbortResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ExecutionOrderingResponse(arg) {
  if (!(arg instanceof scalar_pb.ExecutionOrderingResponse)) {
    throw new Error('Expected argument of type rpc.ExecutionOrderingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ExecutionOrderingResponse(buffer_arg) {
  return scalar_pb.ExecutionOrderingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ExecutionValidationRequest(arg) {
  if (!(arg instanceof scalar_pb.ExecutionValidationRequest)) {
    throw new Error('Expected argument of type rpc.ExecutionValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ExecutionValidationRequest(buffer_arg) {
  return scalar_pb.ExecutionValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_FunctionRegistrationRequest(arg) {
  if (!(arg instanceof scalar_pb.FunctionRegistrationRequest)) {
    throw new Error('Expected argument of type rpc.FunctionRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_FunctionRegistrationRequest(buffer_arg) {
  return scalar_pb.FunctionRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_IdentifiableResponse(arg) {
  if (!(arg instanceof scalar_pb.IdentifiableResponse)) {
    throw new Error('Expected argument of type rpc.IdentifiableResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_IdentifiableResponse(buffer_arg) {
  return scalar_pb.IdentifiableResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_LedgerValidationRequest(arg) {
  if (!(arg instanceof scalar_pb.LedgerValidationRequest)) {
    throw new Error('Expected argument of type rpc.LedgerValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_LedgerValidationRequest(buffer_arg) {
  return scalar_pb.LedgerValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_LedgerValidationResponse(arg) {
  if (!(arg instanceof scalar_pb.LedgerValidationResponse)) {
    throw new Error('Expected argument of type rpc.LedgerValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_LedgerValidationResponse(buffer_arg) {
  return scalar_pb.LedgerValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_LedgersValidationRequest(arg) {
  if (!(arg instanceof scalar_pb.LedgersValidationRequest)) {
    throw new Error('Expected argument of type rpc.LedgersValidationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_LedgersValidationRequest(buffer_arg) {
  return scalar_pb.LedgersValidationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_LedgersValidationResponse(arg) {
  if (!(arg instanceof scalar_pb.LedgersValidationResponse)) {
    throw new Error('Expected argument of type rpc.LedgersValidationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_LedgersValidationResponse(buffer_arg) {
  return scalar_pb.LedgersValidationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ProofRetrievalRequest(arg) {
  if (!(arg instanceof scalar_pb.ProofRetrievalRequest)) {
    throw new Error('Expected argument of type rpc.ProofRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ProofRetrievalRequest(buffer_arg) {
  return scalar_pb.ProofRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ProofRetrievalResponse(arg) {
  if (!(arg instanceof scalar_pb.ProofRetrievalResponse)) {
    throw new Error('Expected argument of type rpc.ProofRetrievalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ProofRetrievalResponse(buffer_arg) {
  return scalar_pb.ProofRetrievalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_ProofsRegistrationRequest(arg) {
  if (!(arg instanceof scalar_pb.ProofsRegistrationRequest)) {
    throw new Error('Expected argument of type rpc.ProofsRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ProofsRegistrationRequest(buffer_arg) {
  return scalar_pb.ProofsRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_StateRetrievalRequest(arg) {
  if (!(arg instanceof scalar_pb.StateRetrievalRequest)) {
    throw new Error('Expected argument of type rpc.StateRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_StateRetrievalRequest(buffer_arg) {
  return scalar_pb.StateRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_StateRetrievalResponse(arg) {
  if (!(arg instanceof scalar_pb.StateRetrievalResponse)) {
    throw new Error('Expected argument of type rpc.StateRetrievalResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_StateRetrievalResponse(buffer_arg) {
  return scalar_pb.StateRetrievalResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Ledger service definition.
var LedgerService = exports.LedgerService = {
  registerContract: {
    path: '/rpc.Ledger/RegisterContract',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_ContractRegistrationRequest,
    requestDeserialize: deserialize_rpc_ContractRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listContracts: {
    path: '/rpc.Ledger/ListContracts',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractsListingRequest,
    responseType: scalar_pb.ContractsListingResponse,
    requestSerialize: serialize_rpc_ContractsListingRequest,
    requestDeserialize: deserialize_rpc_ContractsListingRequest,
    responseSerialize: serialize_rpc_ContractsListingResponse,
    responseDeserialize: deserialize_rpc_ContractsListingResponse,
  },
  executeContract: {
    path: '/rpc.Ledger/ExecuteContract',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractExecutionRequest,
    responseType: scalar_pb.ContractExecutionResponse,
    requestSerialize: serialize_rpc_ContractExecutionRequest,
    requestDeserialize: deserialize_rpc_ContractExecutionRequest,
    responseSerialize: serialize_rpc_ContractExecutionResponse,
    responseDeserialize: deserialize_rpc_ContractExecutionResponse,
  },
  validateLedger: {
    path: '/rpc.Ledger/ValidateLedger',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.LedgerValidationRequest,
    responseType: scalar_pb.LedgerValidationResponse,
    requestSerialize: serialize_rpc_LedgerValidationRequest,
    requestDeserialize: deserialize_rpc_LedgerValidationRequest,
    responseSerialize: serialize_rpc_LedgerValidationResponse,
    responseDeserialize: deserialize_rpc_LedgerValidationResponse,
  },
  retrieveAssetProof: {
    path: '/rpc.Ledger/RetrieveAssetProof',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.AssetProofRetrievalRequest,
    responseType: scalar_pb.AssetProofRetrievalResponse,
    requestSerialize: serialize_rpc_AssetProofRetrievalRequest,
    requestDeserialize: deserialize_rpc_AssetProofRetrievalRequest,
    responseSerialize: serialize_rpc_AssetProofRetrievalResponse,
    responseDeserialize: deserialize_rpc_AssetProofRetrievalResponse,
  },
  abortExecution: {
    path: '/rpc.Ledger/AbortExecution',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ExecutionAbortRequest,
    responseType: scalar_pb.ExecutionAbortResponse,
    requestSerialize: serialize_rpc_ExecutionAbortRequest,
    requestDeserialize: deserialize_rpc_ExecutionAbortRequest,
    responseSerialize: serialize_rpc_ExecutionAbortResponse,
    responseDeserialize: deserialize_rpc_ExecutionAbortResponse,
  },
};

exports.LedgerClient = grpc.makeGenericClientConstructor(LedgerService);
var LedgerPrivilegedService = exports.LedgerPrivilegedService = {
  registerCert: {
    path: '/rpc.LedgerPrivileged/RegisterCert',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.CertificateRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_CertificateRegistrationRequest,
    requestDeserialize: deserialize_rpc_CertificateRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  registerFunction: {
    path: '/rpc.LedgerPrivileged/RegisterFunction',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.FunctionRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_FunctionRegistrationRequest,
    requestDeserialize: deserialize_rpc_FunctionRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  retrieveState: {
    path: '/rpc.LedgerPrivileged/RetrieveState',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.StateRetrievalRequest,
    responseType: scalar_pb.StateRetrievalResponse,
    requestSerialize: serialize_rpc_StateRetrievalRequest,
    requestDeserialize: deserialize_rpc_StateRetrievalRequest,
    responseSerialize: serialize_rpc_StateRetrievalResponse,
    responseDeserialize: deserialize_rpc_StateRetrievalResponse,
  },
};

exports.LedgerPrivilegedClient = grpc.makeGenericClientConstructor(LedgerPrivilegedService);
var AuditorService = exports.AuditorService = {
  registerContract: {
    path: '/rpc.Auditor/RegisterContract',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_ContractRegistrationRequest,
    requestDeserialize: deserialize_rpc_ContractRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  listContracts: {
    path: '/rpc.Auditor/ListContracts',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractsListingRequest,
    responseType: scalar_pb.ContractsListingResponse,
    requestSerialize: serialize_rpc_ContractsListingRequest,
    requestDeserialize: deserialize_rpc_ContractsListingRequest,
    responseSerialize: serialize_rpc_ContractsListingResponse,
    responseDeserialize: deserialize_rpc_ContractsListingResponse,
  },
  orderExecution: {
    path: '/rpc.Auditor/OrderExecution',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractExecutionRequest,
    responseType: scalar_pb.ExecutionOrderingResponse,
    requestSerialize: serialize_rpc_ContractExecutionRequest,
    requestDeserialize: deserialize_rpc_ContractExecutionRequest,
    responseSerialize: serialize_rpc_ExecutionOrderingResponse,
    responseDeserialize: deserialize_rpc_ExecutionOrderingResponse,
  },
  validateExecution: {
    path: '/rpc.Auditor/ValidateExecution',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ExecutionValidationRequest,
    responseType: scalar_pb.ContractExecutionResponse,
    requestSerialize: serialize_rpc_ExecutionValidationRequest,
    requestDeserialize: deserialize_rpc_ExecutionValidationRequest,
    responseSerialize: serialize_rpc_ContractExecutionResponse,
    responseDeserialize: deserialize_rpc_ContractExecutionResponse,
  },
};

exports.AuditorClient = grpc.makeGenericClientConstructor(AuditorService);
var AuditorPrivilegedService = exports.AuditorPrivilegedService = {
  registerCert: {
    path: '/rpc.AuditorPrivileged/RegisterCert',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.CertificateRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_CertificateRegistrationRequest,
    requestDeserialize: deserialize_rpc_CertificateRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.AuditorPrivilegedClient = grpc.makeGenericClientConstructor(AuditorPrivilegedService);
// Proof registry service definition.
var ProofRegistryService = exports.ProofRegistryService = {
  registerProofs: {
    path: '/rpc.ProofRegistry/RegisterProofs',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ProofsRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_ProofsRegistrationRequest,
    requestDeserialize: deserialize_rpc_ProofsRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  retrieveProof: {
    path: '/rpc.ProofRegistry/RetrieveProof',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ProofRetrievalRequest,
    responseType: scalar_pb.ProofRetrievalResponse,
    requestSerialize: serialize_rpc_ProofRetrievalRequest,
    requestDeserialize: deserialize_rpc_ProofRetrievalRequest,
    responseSerialize: serialize_rpc_ProofRetrievalResponse,
    responseDeserialize: deserialize_rpc_ProofRetrievalResponse,
  },
};

exports.ProofRegistryClient = grpc.makeGenericClientConstructor(ProofRegistryService);
var ProxyService = exports.ProxyService = {
  registerCert: {
    path: '/rpc.Proxy/RegisterCert',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.CertificateRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_CertificateRegistrationRequest,
    requestDeserialize: deserialize_rpc_CertificateRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  registerContract: {
    path: '/rpc.Proxy/RegisterContract',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_ContractRegistrationRequest,
    requestDeserialize: deserialize_rpc_ContractRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  registerFunction: {
    path: '/rpc.Proxy/RegisterFunction',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.FunctionRegistrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_FunctionRegistrationRequest,
    requestDeserialize: deserialize_rpc_FunctionRegistrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  executeContract: {
    path: '/rpc.Proxy/ExecuteContract',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractExecutionRequest,
    responseType: scalar_pb.ContractExecutionResponse,
    requestSerialize: serialize_rpc_ContractExecutionRequest,
    requestDeserialize: deserialize_rpc_ContractExecutionRequest,
    responseSerialize: serialize_rpc_ContractExecutionResponse,
    responseDeserialize: deserialize_rpc_ContractExecutionResponse,
  },
  validateLedgers: {
    path: '/rpc.Proxy/ValidateLedgers',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.LedgersValidationRequest,
    responseType: scalar_pb.LedgersValidationResponse,
    requestSerialize: serialize_rpc_LedgersValidationRequest,
    requestDeserialize: deserialize_rpc_LedgersValidationRequest,
    responseSerialize: serialize_rpc_LedgersValidationResponse,
    responseDeserialize: deserialize_rpc_LedgersValidationResponse,
  },
  proxyResponse: {
    path: '/rpc.Proxy/ProxyResponse',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.IdentifiableResponse,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_IdentifiableResponse,
    requestDeserialize: deserialize_rpc_IdentifiableResponse,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ProxyClient = grpc.makeGenericClientConstructor(ProxyService);
