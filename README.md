# UnitiWeb's Crypter

This is a class that will encrypt, decrypt, and encode strings

### How to use

#### Install Package

To install the package you would run this code

```bash
npm install unitiweb-crypter
```

#### Instantiate Class

Before using you need to instantiate the class and give it a secret

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
