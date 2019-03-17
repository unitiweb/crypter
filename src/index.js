const Cryptr = require('cryptr')

class LFCrypter {
  constructor(secret) {
    if (!secret) throw new Error('No secret is supplied for LFCrypter')
    this.cryptr = new Cryptr(secret)
    this.SHA256 = require("crypto-js/sha256")
  }

  encrypt (value) {
    return this.cryptr.encrypt(value)
  }

  decrypt (value) {
    return this.cryptr.decrypt(value)
  }

  sha256 (value) {
    return this.SHA256(value).toString()
  }
}

module.exports = LFCrypter
