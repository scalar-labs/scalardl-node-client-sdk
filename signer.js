const crypto = require('crypto');
const elliptic = require('elliptic');
const jsrsasign = require('jsrsasign');

/**
 * This class is used for signing certificates using elliptic library
 */
class EllipticSigner {
  /**
   * @param {string} pem
   */
  constructor(pem) {
    this.pem = pem;
  }

  /**
   * This method is used for signing the content
   * @param {Uint8Array} content
   * @return {Uint8Array}
   */
  async sign(content) {
    try {
      const base64 = this.pem
          .replace('-----BEGIN EC PRIVATE KEY-----', '')
          .replace('-----END EC PRIVATE KEY-----', '')
          .replace(/\n/g, '');
      const {prvKeyHex} = jsrsasign.KEYUTIL.getKey(
          jsrsasign.b64utohex(base64),
          null,
          'pkcs5prv',
      );
      const EC = elliptic.ec;
      const ecdsaCurve = elliptic.curves['p256'];
      const ecdsa = new EC(ecdsaCurve);
      const signKey = ecdsa.keyFromPrivate(prvKeyHex, 'hex');
      const sha256 = crypto.createHash('sha256');
      const digest = sha256.update(content).digest();
      const signature = ecdsa.sign(Buffer.from(digest, 'hex'), signKey);
      return new Uint8Array(signature.toDER());
    } catch (err) {
      throw new Error(`Failed to sign the request`);
    }
  }
}

/**
 * @description A factory to create EllipticSigner by given PEM
 */
class SignerFactory {
  /**
   * @param {String} pem
   * @return {EllipticSigner}
   */
  create(pem) {
    return new EllipticSigner(pem);
  }
}

module.exports = {
  SignerFactory,
};
