const { describe, it } = require('mocha')
const { assert, expect } = require('chai')
const Crypter = require('../src')
const secret = 'abc123def456'

describe('Crypter', () => {
  describe('instantiate', () => {
    it('will success with secret', (done) => {
      const crypter = new Crypter(secret)
      assert.instanceOf(crypter, Crypter)
      assert.isNotNull(crypter.cryptr)
      done()
    })
    it('will fail eithout secret', (done) => {
      const crypter = new Crypter()
      assert.instanceOf(crypter, Crypter)
      assert.isNull(crypter.cryptr)
      done()
    })
  })
  describe('encrypt', () => {
    it('will encrypt string with secret', (done) => {
      const crypter = new Crypter(secret)
      const value = 'This is a test'
      const encrypted = crypter.encrypt(value)
      assert.notEqual(encrypted, value)
      done()
    })
    it('will fail to encrypt without secret', (done) => {
      const crypter = new Crypter()
      assert.throws(() => {
        crypter.encrypt('This is a test')
      }, Error, 'No secret was supplied for Crypter')
      done()
    })
  })
  describe('decrypt', () => {
    it('will decrypt string with secret', (done) => {
      const crypter = new Crypter(secret)
      const value = 'This is a test'
      const encrypted = crypter.encrypt(value)
      const decrypted = crypter.decrypt(encrypted)
      assert.notEqual(encrypted, value)
      assert.equal(decrypted, value)
      done()
    })
    it('will fail to decrypt without secret', (done) => {
      const crypter = new Crypter()
      assert.throws(() => {
        crypter.decrypt('JustSomeEncryptedString')
      }, Error, 'No secret was supplied for Crypter')
      done()
    })
  })
  describe('sha256', () => {
    it('will encode string with secret', (done) => {
      const crypter = new Crypter(secret)
      const value = 'This is a test'
      const encrypted = crypter.sha256(value)
      assert.notEqual(encrypted, value)
      done()
    })
    it('will encode string without secret', (done) => {
      const crypter = new Crypter()
      const value = 'This is a test'
      const encrypted = crypter.sha256(value)
      assert.notEqual(encrypted, value)
      done()
    })
  })
})
