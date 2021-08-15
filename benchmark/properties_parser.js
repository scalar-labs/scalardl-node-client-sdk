/* eslint-disable require-jsdoc */

const propertiesParser = require('properties-parser');

function parse(properties) {
  const parsed = propertiesParser.parse(properties);

  if (parsed['scalar.dl.client.server.port'] !== undefined) {
    parsed['scalar.dl.client.server.port'] = parseInt(
        parsed['scalar.dl.client.server.port'],
    );
  }

  if (parsed['scalar.dl.client.server.privileged_port'] != undefined) {
    parsed['scalar.dl.client.server.privileged_port'] = parseInt(
        parsed['scalar.dl.client.server.privileged_port'],
    );
  }

  if (parsed['scalar.dl.client.cert_version'] != undefined) {
    parsed['scalar.dl.client.cert_version'] = parseInt(
        parsed['scalar.dl.client.cert_version'],
    );
  }

  if (parsed['scalar.dl.client.auditor.port'] != undefined) {
    parsed['scalar.dl.client.auditor.port'] = parseInt(
        parsed['scalar.dl.client.auditor.port'],
    );
  }

  if (parsed['scalar.dl.client.auditor.privileged_port'] != undefined) {
    parsed['scalar.dl.client.auditor.privileged_port'] = parseInt(
        parsed['scalar.dl.client.auditor.privileged_port'],
    );
  }

  if (parsed['scalar.dl.client.tls.enabled'] !== undefined) {
    parsed['scalar.dl.client.tls.enabled'] =
      parsed['scalar.dl.client.tls.enabled'] === 'true';
  }

  if (parsed['scalar.dl.client.auditor.enabled'] !== undefined) {
    parsed['scalar.dl.client.auditor.enabled'] =
      parsed['scalar.dl.client.auditor.enabled'] === 'true';
  }

  return parsed;
}

module.exports = {
  parse,
};
