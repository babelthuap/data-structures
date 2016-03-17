'use strict';

class ArrayDict {
  constructor() {
    this._dict = [];
  }

  _indexOf(key) {
    for (let index = 0; index < this._dict.length; index++) {
      if (this._dict[index].key === key) {
        return index;
      }
    }
    return -1;
  }

  get(key) {
    let index = this._indexOf(key);
    if (index !== -1) {
      return this._dict[index].value;
    } else {
      return undefined;
    }
  }

  set(key, value) {
    let index = this._indexOf(key);
    if (index !== -1) {
      this._dict[index].value = value;
    } else {
      this._dict.push({
        key: key,
        value: value,
      });
    }
    return value;
  }

  delete(key) {
    let index = this._indexOf(key);
    if (index !== -1) {
      this._dict.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  keys() {
    return this._dict.map(pair => pair.key);
  }
}

module.exports = ArrayDict;
