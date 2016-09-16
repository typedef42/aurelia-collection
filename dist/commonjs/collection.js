'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collection = undefined;

var _dec, _class;

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _config = require('./config');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Collection = exports.Collection = (_dec = (0, _aureliaDependencyInjection.resolver)(), _dec(_class = function () {
  function Collection(key) {
    _classCallCheck(this, Collection);

    this._key = key;
  }

  Collection.prototype.get = function get(container) {
    return container.get(_config.Config).getService(this._key);
  };

  Collection.of = function of(key) {
    return new Collection(key);
  };

  return Collection;
}()) || _class);