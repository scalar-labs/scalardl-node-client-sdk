// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var scalar_pb = require('./scalar_pb.js');

function serialize_rpc_AssetProofs(arg) {
  if (!(arg instanceof scalar_pb.AssetProofs)) {
    throw new Error('Expected argument of type rpc.AssetProofs');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_AssetProofs(buffer_arg) {
  return scalar_pb.AssetProofs.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_AssetReference(arg) {
  if (!(arg instanceof scalar_pb.AssetReference)) {
    throw new Error('Expected argument of type rpc.AssetReference');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_AssetReference(buffer_arg) {
  return scalar_pb.AssetReference.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_rpc_FunctionRegistrationRequest(arg) {
  if (!(arg instanceof scalar_pb.FunctionRegistrationRequest)) {
    throw new Error('Expected argument of type rpc.FunctionRegistrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_FunctionRegistrationRequest(buffer_arg) {
  return scalar_pb.FunctionRegistrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_rpc_LedgerServiceResponse(arg) {
  if (!(arg instanceof scalar_pb.LedgerServiceResponse)) {
    throw new Error('Expected argument of type rpc.LedgerServiceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_LedgerServiceResponse(buffer_arg) {
  return scalar_pb.LedgerServiceResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_rpc_ProofRegistryResponse(arg) {
  if (!(arg instanceof scalar_pb.ProofRegistryResponse)) {
    throw new Error('Expected argument of type rpc.ProofRegistryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_rpc_ProofRegistryResponse(buffer_arg) {
  return scalar_pb.ProofRegistryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Ledger service definition.
var LedgerService = exports.LedgerService = {
  registerContract: {
    path: '/rpc.Ledger/RegisterContract',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractRegistrationRequest,
    responseType: scalar_pb.LedgerServiceResponse,
    requestSerialize: serialize_rpc_ContractRegistrationRequest,
    requestDeserialize: deserialize_rpc_ContractRegistrationRequest,
    responseSerialize: serialize_rpc_LedgerServiceResponse,
    responseDeserialize: deserialize_rpc_LedgerServiceResponse,
  },
  listContracts: {
    path: '/rpc.Ledger/ListContracts',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.ContractsListingRequest,
    responseType: scalar_pb.LedgerServiceResponse,
    requestSerialize: serialize_rpc_ContractsListingRequest,
    requestDeserialize: deserialize_rpc_ContractsListingRequest,
    responseSerialize: serialize_rpc_LedgerServiceResponse,
    responseDeserialize: deserialize_rpc_LedgerServiceResponse,
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
    responseType: scalar_pb.LedgerServiceResponse,
    requestSerialize: serialize_rpc_CertificateRegistrationRequest,
    requestDeserialize: deserialize_rpc_CertificateRegistrationRequest,
    responseSerialize: serialize_rpc_LedgerServiceResponse,
    responseDeserialize: deserialize_rpc_LedgerServiceResponse,
  },
  registerFunction: {
    path: '/rpc.LedgerPrivileged/RegisterFunction',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.FunctionRegistrationRequest,
    responseType: scalar_pb.LedgerServiceResponse,
    requestSerialize: serialize_rpc_FunctionRegistrationRequest,
    requestDeserialize: deserialize_rpc_FunctionRegistrationRequest,
    responseSerialize: serialize_rpc_LedgerServiceResponse,
    responseDeserialize: deserialize_rpc_LedgerServiceResponse,
  },
};

exports.LedgerPrivilegedClient = grpc.makeGenericClientConstructor(LedgerPrivilegedService);
// Proof registry service definition.
var ProofRegistryService = exports.ProofRegistryService = {
  store: {
    path: '/rpc.ProofRegistry/Store',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.AssetProofs,
    responseType: scalar_pb.ProofRegistryResponse,
    requestSerialize: serialize_rpc_AssetProofs,
    requestDeserialize: deserialize_rpc_AssetProofs,
    responseSerialize: serialize_rpc_ProofRegistryResponse,
    responseDeserialize: deserialize_rpc_ProofRegistryResponse,
  },
  retrieve: {
    path: '/rpc.ProofRegistry/Retrieve',
    requestStream: false,
    responseStream: false,
    requestType: scalar_pb.AssetReference,
    responseType: scalar_pb.ProofRegistryResponse,
    requestSerialize: serialize_rpc_AssetReference,
    requestDeserialize: deserialize_rpc_AssetReference,
    responseSerialize: serialize_rpc_ProofRegistryResponse,
    responseDeserialize: deserialize_rpc_ProofRegistryResponse,
  },
};

exports.ProofRegistryClient = grpc.makeGenericClientConstructor(ProofRegistryService);
