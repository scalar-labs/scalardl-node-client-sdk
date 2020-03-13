// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
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

function serialize_rpc_FunctionRegistrationRequest(arg) {
  if (!(arg instanceof scalar_pb.FunctionRegistrationRequest)) {
    throw new Error('Expected argument of type rpc.FunctionRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_FunctionRegistrationRequest(buffer_arg) {
  return scalar_pb.FunctionRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_IdentifiableContractExecutionResponse(arg) {
  if (!(arg instanceof scalar_pb.IdentifiableContractExecutionResponse)) {
    throw new Error('Expected argument of type rpc.IdentifiableContractExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_IdentifiableContractExecutionResponse(buffer_arg) {
  return scalar_pb.IdentifiableContractExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_rpc_PauseRequest(arg) {
  if (!(arg instanceof scalar_pb.PauseRequest)) {
    throw new Error('Expected argument of type rpc.PauseRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_PauseRequest(buffer_arg) {
  return scalar_pb.PauseRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_rpc_ResultRetrievalRequest(arg) {
  if (!(arg instanceof scalar_pb.ResultRetrievalRequest)) {
    throw new Error('Expected argument of type rpc.ResultRetrievalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ResultRetrievalRequest(buffer_arg) {
  return scalar_pb.ResultRetrievalRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_rpc_StatsResponse(arg) {
  if (!(arg instanceof scalar_pb.StatsResponse)) {
    throw new Error('Expected argument of type rpc.StatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_StatsResponse(buffer_arg) {
  return scalar_pb.StatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
var AdminService = exports.AdminService = {
  pause: {
    path: '/rpc.Admin/Pause',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.PauseRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_PauseRequest,
    requestDeserialize: deserialize_rpc_PauseRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  unpause: {
    path: '/rpc.Admin/Unpause',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  stats: {
    path: '/rpc.Admin/Stats',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: scalar_pb.StatsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_rpc_StatsResponse,
    responseDeserialize: deserialize_rpc_StatsResponse,
  },
};

exports.AdminClient = grpc.makeGenericClientConstructor(AdminService);
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
// Result retriever service definition.
var ResultRetrieverService = exports.ResultRetrieverService = {
  retrieveExecutionResponse: {
    path: '/rpc.ResultRetriever/RetrieveExecutionResponse',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ResultRetrievalRequest,
    responseType: scalar_pb.ContractExecutionResponse,
    requestSerialize: serialize_rpc_ResultRetrievalRequest,
    requestDeserialize: deserialize_rpc_ResultRetrievalRequest,
    responseSerialize: serialize_rpc_ContractExecutionResponse,
    responseDeserialize: deserialize_rpc_ContractExecutionResponse,
  },
};

exports.ResultRetrieverClient = grpc.makeGenericClientConstructor(ResultRetrieverService);
var ProxyService = exports.ProxyService = {
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
  proxyResponse: {
    path: '/rpc.Proxy/ProxyResponse',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.IdentifiableContractExecutionResponse,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_rpc_IdentifiableContractExecutionResponse,
    requestDeserialize: deserialize_rpc_IdentifiableContractExecutionResponse,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ProxyClient = grpc.makeGenericClientConstructor(ProxyService);
