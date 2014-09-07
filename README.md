[![NPM
version](https://img.shields.io/npm/v/timer-ref.svg?style=flat-square)](https://www.npmjs.org/package/timer-ref)
[![Build Status](https://img.shields.io/travis/vesln/timer-ref.svg?style=flat-square)](http://travis-ci.org/vesln/timer-ref)
[![Dependencies](http://img.shields.io/david/vesln/timer-ref.svg?style=flat-square)](https://david-dm.org/vesln/timer-ref)
[![Dev Dependencies](http://img.shields.io/david/dev/vesln/timer-ref.svg?style=flat-square)](https://david-dm.org/vesln/timer-ref)

# timer-ref

## Usage

Modules like [sinon](https://github.com/cjohansen/Sinon.JS) and
[timekeeper](https://github.com/vesln/timekeeper) can modify `Date` and timers
which can lead to problems, if you are, for example, building a [test
runner](https://github.com/hydrojs). This modules simply caches the original
objects, so you can use them even after modified.

In order to be effective, require this module as early as possible.

- `Date`
- `setTimeout`
- `clearTimeout`
- `setInterval`
- `clearInterval`

## Tests

```
$ npm install
$ npm test
```

## Authors

- [Veselin Todorov](https://github.com/vesln)

## License

The MIT License (see LICENSE)
