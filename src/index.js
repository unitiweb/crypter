const Cryptr = require('cryptr')
const sha256 = require("crypto-js/sha256")

class Crypter {
  constructor(secret) {
    this.cryptr = null

    // A secred is only required for the encrypt and decrypt
    // If a secret was entered we need to instantiate the Crypter class
    if (secret) {
      this.cryptr = new Cryptr(secret)
    }

    // The sha256 library to use
    this.SHA256 = sha256
  }

  /**
   * Encrypt the given value using the Cryptr class
   *
   * @param value The value to be encrypted
   *
   * @return string
   */
  encrypt (value) {
    if (!this.cryptr) throw new Error('No secret is supplied for LFCrypter')
    return this.cryptr.encrypt(value)
  }

  /**
   * Decrypt the given string that was encrypted using the encrypt method
   *
   * @param value The encrypted string to be decrypted
   *
   * @return string
   */
  decrypt (value) {
    if (!this.cryptr) throw new Error('No secret is supplied for LFCrypter')
    return this.cryptr.decrypt(value)
  }

  /**
   * sha256 encode the given string
   *
   * @param value The string to encode
   *
   * @return string
   */
  sha256 (value) {
    return this.SHA256(value).toString()
  }
}

module.exports = Crypter
