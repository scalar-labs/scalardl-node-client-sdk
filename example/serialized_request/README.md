# A guide on how to use Node SDK to execute a serialized request created by another application
This guide explains how to write a proxy to execute a serialized request with Node client SDK.
For ease of explanation, we will use a demo application.

## Architecture overview of demo application
In the demo application, a web client uses [Scalar DL Web Client SDK](https://github.com/scalar-labs/scalardl-web-client-sdk) to create a serialized request then it
sends it to a web service using Scalar DL Node Client SDK, which executes the request against the Scalar DL network.

![overview](img/overview.png)


### Create a serialized request with Web Client SDK
You can create a serialized request as an array of `Uint8Array` with `createSerializedXXX` methods of `ClientService` object as follows.

```javascript
const clientProperties = {
    'scalar.dl.client.cert_holder_id': `foo`,
    'scalar.dl.client.cert_version': 1,
    'scalar.dl.client.private_key_pem': '...',
    'scalar.dl.client.cert_pem': '...',
  };
const clientService = new Scalar.ClientService(clientProperties);
const serializedCertificateRegistrationRequest = await clientService.createSerializedCertificateRegistrationRequest();
```

For the full code, please refer to the [source](web-client/index.html) file.

### Execute a serialized request with Node Client SDK

You can execute a serialized request with `ClientServiceWithBinary` object as follows.

```javascript
const  binaryClientProperties= {
  'scalar.dl.client.server.host': '127.0.0.1',
  'scalar.dl.client.server.port': 50051,
  'scalar.dl.client.server.privileged_port': 50052,
};
const binaryClientService = new ClientServiceWithBinary(binaryClientProperties);
await binaryClientService.registerCertificate(serializedCertificateRegistrationRequest);
```

It should be noted that since the binary client service is only executing the request which was created before by web-client,
the binary client service does not require a user private key if it only executes the serialized request.

For the full code, please refer to the [source](web-service/node-server.js) file.

## Run the sample application

If you are interested in trying out this sample application, first you need to have a running [Scalar DL environment](https://scalardl.readthedocs.io/en/latest/) on localhost.

Then, start the web-service which will execute the serialized request.
```
cd web-service
npm install
node node-server.js
```

Finally, open the web-client self contained [html page](web-client/index.html) with your browser to send request.
