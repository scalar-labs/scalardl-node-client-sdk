# Scalar DL Node Client SDK

This is a library for Node.js applications by which the applications can interact with a [Scalar DL](https://github.com/scalar-labs/scalardl) network.

## Node version used for development and testing
This package has been developed and tested using Node LTS v14.16.0. named "fermium".
This means we cannot guarantee the package nominal behaviour when using other Node versions.

## Install

We can use any NPM package manager to install this library. For example, to install with NPM:
```
npm install @scalar-labs/scalardl-node-client-sdk
```

## HOWTO

### Create ClientService instance

`ClientService` class is the main class of this package.
It provides following functions to request Scalar DL network.

|Name|use|
|----|---|
|registerCertificate|To register a client's certificate on a Scalar DL network|
|registerContract|To register a contract (of a registered client) on the Scalar DL network|
|listContracts|To list the client's registered contracts|
|executeContract|To execute a client's registered contract|
|validateLedger|To validate an asset on the Scalar DL network to determine if it has been tampered|

If an error occurs when executing one of the above methods, a `ClientError` will be thrown. The
`ClientError.code` provides additional error context. Please refer to the [Runtime error](#runtime-error) section below for the status code specification.

Use the code snippet below to create a ClientService instance.

```javascript
const { ClientService } = require('@scalar-labs/scalardl-node-client-sdk');
const clientService = new ClientService(clientProperties);
```

The `clientProperties` argument is mandatory for the constructor.
This is a properties example that a user `foo@example.com` would use to try to connect to the server `scalardl-server.example.com:50051` of the Scalar DL network.
```javascript
{
    'scalar.dl.client.server.host': 'scalardl-server.example.com',
    'scalar.dl.client.server.port': 50051,
    'scalar.dl.client.server.privileged_port': 50052,
    'scalar.dl.client.cert_holder_id': 'foo@example.com',
    'scalar.dl.client.private_key_pem': '-----BEGIN EC PRIVATE KEY-----\nMHc...',
    // scalar.dl.client.private_key_path is applied when scalar.dl.client.private_key_pem is not given
    'scalar.dl.client.private_key_path': 'path-to-key-file',
    'scalar.dl.client.cert_pem': '-----BEGIN CERTIFICATE-----\nMIICjTCCAj...\n',
    // scalar.dl.client.cert_path is applied when scalar.dl.client.cert_pem is not given
    'scalar.dl.client.cert_path': 'path-to-certificate-file',
    'scalar.dl.client.cert_version': 1,
    'scalar.dl.client.tls.enabled': false,
    'scalar.dl.client.tls.ca_root_cert_pem': '-----BEGIN CERTIFICATE-----\n...\n',
    // scalar.dl.client.tls.ca_root_cert_path is applied when scalar.dl.client.tls.ca_root_cert_pem is not given
    'scalar.dl.client.tls.ca_root_cert_path': 'path-to-ca-root-certificate-file',
    'scalar.dl.client.authorization.credential': '...',
    'scalar.dl.client.proxy.server': '...',
}
```

If the auditor capability is enabled on the Scalar DL network, specify additional properties like the following example. In this example, the client interacts with the auditor `scalardl-auditor.example.com` and detects Byzantine faults including data tampering when executing contracts.

```javascript
{
    'scalar.dl.client.auditor.enabled': true,
    'scalar.dl.client.auditor.host': 'scalardl-auditor.example.com',
    'scalar.dl.client.auditor.port': 40051,
    'scalar.dl.client.auditor.privileged_port': 40052,
}
```

In what follows assume that we have a clientService instance.

### Register the certificate
Use the `registerCertificate` function to register a certificate on the Scalar DL network.
```javascript
await clientService.registerCertificate();
```

### Register contracts
Use the `registerContract` function to register a contract.
```javascript
await clientService.registerContract('contractId', 'com.example.contract.contractName', contractUint8Array, propertiesObject);
```

### Register functions
Use the `registerFunction` function to register a function.
```javascript
await clientService.registerFunction('functionId', 'com.example.function.functionName', functionUint8Array);
```

### List registered contracts
Use `listContracts` function to list all registered contracts.
```javascript
const constracts = await clientService.listContracts();
```

### Execute a contract
Use `executeContract` function to execute a registered contract. It will also execute a function if `_functions_` is given in the argument.
```javascript
const response = await clientService.executeContract('contractId', argumentObject);
const executionResult = response.getResult();
const proofsList = response.getProofs();
```

```javascript
const response = await clientService.executeContract('contractId', { 'arg1': 'a', '_functions_': [functionId] }, { 'arg2': 'b' });
```
`{ 'arg1': 'a', ` will be passed via [contractArgument](https://github.com/scalarindetail/scalardl-node-client-sdk/blob/3e531b4c62fb14702a873b07f44cb37212f04be4/test/TestFunction.java#L14), while `{ 'arg2': 'b' }` will be passed via [functionArgument](https://github.com/scalarindetail/scalardl-node-client-sdk/blob/3e531b4c62fb14702a873b07f44cb37212f04be4/test/TestFunction.java#L15).

### Validate an asset
Use the `validateLedger` function to validate an asset in the Scalar DL network.
```javascript
const response = await clientService.validateLedger('assetId');
const statusCode = response.getCode();
const proof = response.getProof();
```

#### Validate an asset linearizably
The default ledger validation in a Auditor-enabled Scalar DL network is non-linearizable; i.e., there might be cases where Ledger and Auditor look inconsistent temporarily.
Scalar DL supports linearizable ledger validation.
To use it, we can configure the properties as follows
```javascript
{
    'scalar.dl.client.auditor.enabled': true,
    ...
    'scalar.dl.client.auditor.linearizable_validation.enabled': true,
    'scalar.dl.client.auditor.linearizable_validation.contract_id': '<choose a contract ID>',
}
```
and, register the [ValidateLedger](https://github.com/scalar-labs/scalardl-java-client-sdk/blob/master/src/main/java/com/scalar/dl/client/contract/ValidateLedger.java) contract as the contract ID we specified in the properties.
Then, the ClientService.validateLedger function can provide linearizable ledger validation.

### Runtime error
Error thrown by the client present a status code.
```javascript
try {
    await clientService.registerCertificate();
} catch (clientError) {
    const message = clientError.message;
    const statusCode = clientError.code;
}
```

```
StatusCode = {
  OK: 200,
  INVALID_HASH: 300,
  INVALID_PREV_HASH: 301,
  INVALID_CONTRACT: 302,
  INVALID_OUTPUT: 303,
  INVALID_NONCE: 304,
  INCONSISTENT_STATES: 305,
  INVALID_SIGNATURE: 400,
  UNLOADABLE_KEY: 401,
  UNLOADABLE_CONTRACT: 402,
  CERTIFICATE_NOT_FOUND: 403,
  CONTRACT_NOT_FOUND: 404,
  CERTIFICATE_ALREADY_REGISTERED: 405,
  CONTRACT_ALREADY_REGISTERED: 406,
  INVALID_REQUEST: 407,
  CONTRACT_CONTEXTUAL_ERROR: 408,
  ASSET_NOT_FOUND: 409,
  FUNCTION_NOT_FOUND: 410,
  UNLOADABLE_FUNCTION: 411,
  INVALID_FUNCTION: 412,
  DATABASE_ERROR: 500,
  UNKNOWN_TRANSACTION_STATUS: 501,
  RUNTIME_ERROR: 502,
  CLIENT_IO_ERROR: 600,
  CLIENT_DATABASE_ERROR: 601,
  CLIENT_RUNTIME_ERROR: 602,
};
```

## Create raw gRPC requests

You can also create a raw gRPC request in byte array (JavaScript Uint8Array) too.
Note that the name of functions are different from usual functions such as `executeContract` but the parameters are exactly the same.

### Register the certificate
```javascript
const binary = await ClientService.createSerializedCertificateRegistrationRequest();
```

### Register contracts
```javascript
const binary = await clientService.createSerializedContractRegistrationRequest('contractId', 'com.example.contract.contractName', contractUint8Array, propertiesObject);
```

### Register functions
```javascript
const binary = await clientService.createSerializedFunctionRegistrationRequest('functionId', 'com.example.function.functionName', functionUint8Array);
```

### List registered contracts
```javascript
const binary = await clientService.createSerializedContractsListingRequest();
```

### Execute a contract
```javascript
const binary = await clientService.createSerializedContractExecutionRequest('contractId', argumentObject);
```

### Validate an asset
```javascript
const binary = await clientService.createSerializedLedgerValidationRequest('assetId');
```

## Send the raw gRPC requests to Scalar DL servers
The SDK has another `ClientServiceWithBinary` class for you to send the byte array of a request to Scalar DL network.

```javascript
const { ClientServiceWithBinary } = require('@scalar-labs/scalardl-node-client-sdk');
const clientService = new ClientServiceWithBinary(clientProperties);
```

### Register the certificate
```javascript
const binary = await ClientService.createSerializedCertificateRegistrationRequest();
await ClientService.registerCertificate(binary);
```

### Register contracts
```javascript
const binary = await clientService.createSerializedContractRegistrationRequest('contractId', 'com.example.contract.contractName', contractUint8Array, propertiesObject);
await ClientService.registerContract(binary);
```

### Register functions
```javascript
const binary = await clientService.createSerializedFunctionRegistrationRequest('functionId', 'com.example.function.functionName', functionUint8Array);
await clientService.registerFunction(binary);
```

### List registered contracts
```javascript
const binary = await clientService.createSerializedContractsListingRequest();
const contracts = await clientService.listContracts(binary);
```

### Execute a contract
```javascript
const binary = await clientService.createSerializedContractExecutionRequest('contractId', argumentObject);
const response = await clientService.executeContract(binary);
const executionResult = response.getResult();
const proofsList = response.getProofs();
```

### Validate an asset
```javascript
const binary = await clientService.createSerializedLedgerValidationRequest('assetId');
const response = await clientService.validateLedger(binary);
const statusCode = response.getCode();
const proof = response.getProof();
```

## Contributing
This library is mainly maintained by the Scalar Engineering Team, but of course we appreciate any help.

* For asking questions, finding answers and helping other users, please go to [stackoverflow](https://stackoverflow.com/) and use [scalardl](https://stackoverflow.com/questions/tagged/scalardl) tag.
* For filing bugs, suggesting improvements, or requesting new features, help us out by opening an issue.

## License
Scalar DL Node client SDK is dual-licensed under both the AGPL (found in the LICENSE file in the root directory) and a commercial license. You may select, at your option, one of the above-listed licenses. Regarding the commercial license, please [contact us](https://scalar-labs.com/contact_us/) for more information.
