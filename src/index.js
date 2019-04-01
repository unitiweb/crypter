const Cryptr = require('cryptr')

class LFCrypter {
  constructor(secret) {
    this.cryptr = null
    if (secret) {
      this.cryptr = new Cryptr(secret)
    }
    this.SHA256 = require("crypto-js/sha256")
  }

  encrypt (value) {
    if (!this.cryptr) throw new Error('No secret is supplied for LFCrypter')
    return this.cryptr.encrypt(value)
  }

  decrypt (value) {
    if (!this.cryptr) throw new Error('No secret is supplied for LFCrypter')
    return this.cryptr.decrypt(value)
  }

  sha256 (value) {
    return this.SHA256(value).toString()
  }
}

module.exports = LFCrypter
