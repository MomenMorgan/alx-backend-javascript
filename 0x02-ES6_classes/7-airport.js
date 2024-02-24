export default class Airport {
  constructor() {
    this.planes = 0;
  }

  get planes() {
    return this._planes;
  }

  set planes(value) {
    this._planes = value;
  }

  static getAirportCode() {
    return 'DEN';
  }
}
