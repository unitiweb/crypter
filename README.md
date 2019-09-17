[![Build Status](https://circleci.com/gh/unitiweb/crypter.svg?style=shield)](https://circleci.com/gh/unitiweb/crypter)
[![Coverage Status](https://coveralls.io/repos/github/unitiweb/crypter/badge.svg?branch=master)](https://coveralls.io/github/unitiweb/crypter?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

# unitiweb-crypter

This is a class that will encrypt, decrypt, and encode strings. Currently it uses `cryptr` to handle the encryption.

### How to use

#### Install Package

To install the package you would run this code

```bash
npm install unitiweb-crypter
```

#### Instantiate Class

Library for encrypting, decrypting and encoding strings.

```js
// A random secret key
const secret = 'abc123def456(@%';

// Instantiate the class
const crypter = new Crypter(secret);
```

#### Using the Class

Here's how you use the class to encrypt, decrypt, and encode

```js
// Setup the class
const secret = 'abc123def456(@%'
const crypter = new Crypter(secret)

// The string
const myString = 'This is a test'

// Encrypt a string
const myStringEncrypted = crypter.encode(myString)

// Decrypt a string
const myStringDecrypted = crypter.decrypt(myStringEncrypted)

// SHA256 encode a string
const encodedString = crypter.sha256(myString)
```
