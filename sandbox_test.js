const {
  ClientService,
} = require('./scalardl-node-client-sdk');

const path = require('path');

(async () => {
  const properties = {
    'scalar.dl.client.server.host': 'sandbox.scalar-labs.com',
    'scalar.dl.client.server.port': 443,

    'scalar.dl.client.cert_holder_id': 'Torch3333',
    'scalar.dl.client.tls.enabled': true,
    'scalar.dl.client.server.privileged_port': 50052,
    'scalar.dl.client.cert_version': 1,
    'scalar.dl.client.private_key_pem': '-----BEGIN EC PRIVATE KEY-----\n' +
      'MHcCAQEEIOrr9WXvCZLyRCMorRl4ChONXImGedT09TW6woS3DraKoAoGCCqGSM49\n' +
      'AwEHoUQDQgAE10qKQYn6AwIptvjiglqVWqTnXaRVvfXIj1DykokiPpnIfLLsjeea\n' +
      'id4vr1c7EZVK28EQnKx39ShWle7l5LzMuw==\n' +
      '-----END EC PRIVATE KEY-----\n',

    'scalar.dl.client.cert_pem': '-----BEGIN CERTIFICATE-----\n' +
      'MIICcjCCAhegAwIBAgIUHgCVHmSm9cJ65scO5GCwF4Dbk2swCgYIKoZIzj0EAwIw\n' +
      'bzELMAkGA1UEBhMCSlAxDjAMBgNVBAgTBVRva3lvMQ4wDAYDVQQHEwVUb2t5bzEf\n' +
      'MB0GA1UEChMWU2NhbGFyIEludGVybWVkaWF0ZSBDQTEfMB0GA1UEAxMWU2NhbGFy\n' +
      'IEludGVybWVkaWF0ZSBDQTAeFw0yMTAyMTkwNTE1MDBaFw0yNDAyMTkwNTE1MDBa\n' +
      'MCoxKDAmBgNVBAMTH1NjYWxhciBTYW5kYm94IENsaWVudCBUb3JjaDMzMzMwWTAT\n' +
      'BgcqhkjOPQIBBggqhkjOPQMBBwNCAATXSopBifoDAim2+OKCWpVapOddpFW99ciP\n' +
      'UPKSiSI+mch8suyN55qJ3i+vVzsRlUrbwRCcrHf1KFaV7uXkvMy7o4HVMIHSMA4G\n' +
      'A1UdDwEB/wQEAwIFoDATBgNVHSUEDDAKBggrBgEFBQcDAjAMBgNVHRMBAf8EAjAA\n' +
      'MB0GA1UdDgQWBBQnMwLKnTvpZvaVCTheyrnQhaWKiDAfBgNVHSMEGDAWgBRx5i9t\n' +
      'SKcsol9xwUuxjxuyGFStBDAxBggrBgEFBQcBAQQlMCMwIQYIKwYBBQUHMAGGFWh0\n' +
      'dHA6Ly9sb2NhbGhvc3Q6ODg4OTAqBgNVHR8EIzAhMB+gHaAbhhlodHRwOi8vbG9j\n' +
      'YWxob3N0Ojg4ODgvY3JsMAoGCCqGSM49BAMCA0kAMEYCIQCX+RgBaX+9Yz+KwAwW\n' +
      'TiNBdkf6A8S/Dft2Nq6TohVm8gIhAJI6qGPohMj1DcztpiCYbRvwyTFuLYjGbsFZ\n' +
      'flKK7wbC\n' +
      '-----END CERTIFICATE-----\n',
    'scalar.dl.client.authorization.credential': 'Basic VG9yY2gzMzMzOjYwZDgxOGY2YzJlZjQ1MWE5OGVjYTNlNDM5NzNkNWI3YWU1OWRmNDJlYWZjODU5NTBjZmEwMTY5OWY3NjBkNmM=',

  };
  const clientService = new ClientService(properties);

  try {
    // console.log('Register certificate');
    // await clientService.registerCertificate();
    // console.log('certificate registered');

    // console.log('Register contract');
    // const fs = require('fs');
    // const buffer = fs.readFileSync(
    //   path.join(
    //     __dirname,
    //     'StateUpdater.class',
    //   ),
    // );
    // const contractId =
    //   `${properties['scalar.dl.client.cert_holder_id']}_StateUpdater`;
    // await clientService.registerContract(
    //   contractId,
    //   'com.org1.contract.StateUpdater',
    //   buffer,
    //   {'properties': ''},
    // );
    // console.log('Contract registered');

    console.log('List registered contracts');
    const grpc = require('grpc');
    const metadata = new grpc.Metadata();
    metadata.add('authorization',
      'Basic VG9yY2gzMzMzOjYwZDgxOGY2YzJlZjQ1MWE5OGVjYTNlNDM5NzNkNWI3YWU1OWRmNDJlYWZjODU5NTBjZmEwMTY5OWY3NjBkNmM=');
    r = await clientService.listContracts();
    console.log(r);

    // console.log('Execute contract');
    // r = await clientService.executeContract(
    //     contractId,
    //     {
    //       asset_id: 'foo',
    //       state: 1,
    //     },
    // );
    // console.log(r);
    //
    // console.log('Validate ledger');
    // r = await clientService.validateLedger('foo');
    // console.log(r);
  } catch (e) {
    console.log(`${e.code} ${e.message}`);
  }
})();
