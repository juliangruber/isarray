
# isarray

`Array#isArray` for older browsers and deprecated Node.js versions.

[![github actions][actions-image]][actions-url]
[![downloads](https://img.shields.io/npm/dm/isarray.svg)](https://www.npmjs.org/package/isarray)
[![openssf](https://api.securityscorecards.dev/projects/github.com/juliangruber/isarray/badge)](https://deps.dev/npm/isarray)

__Just use Array.isArray directly__, unless you need to support those older versions.

## Usage

```js
var isArray = require('isarray');

console.log(isArray([])); // => true
console.log(isArray({})); // => false
```

## API

[Array#isArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

## Installation

With [npm](https://npmjs.org) do

```bash
$ npm install isarray
```

Then bundle for the browser with
[browserify](https://github.com/substack/node-browserify).

## Sponsors

This module is proudly supported by my [Sponsors](https://github.com/juliangruber/sponsors)!

Do you want to support modules like this to improve their quality, stability and weigh in on new features? Then please consider donating to my [Patreon](https://www.patreon.com/juliangruber). Not sure how much of my modules you're using? Try [feross/thanks](https://github.com/feross/thanks)!

## Security contact information

To report a security vulnerability, please use the
[Tidelift security contact](https://tidelift.com/security).
Tidelift will coordinate the fix and disclosure.

[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/juliangruber/isarray
[actions-url]: https://github.com/juliangruber/isarray/actions
