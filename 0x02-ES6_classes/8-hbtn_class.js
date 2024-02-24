export default class ClassRoom {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(value) {
    this._size = value;
  }

  set location(value) {
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this._location}`;
    }
    return this._size;
  }
}
