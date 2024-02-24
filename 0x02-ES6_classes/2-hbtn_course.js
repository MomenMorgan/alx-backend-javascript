export default class HolbertonCours {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    if (typeof this._name === 'string') {
      return this._name;
    }
    return 'Error';
  }

  get length() {
    if (typeof this._length === 'number') {
      return this._length;
    }
    return 'Error';
  }

  get students() {
    if (Array.isArray(this._students)) {
      return this._students;
    }
    return 'Error';
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    }
    return 'Error';
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    }
    return 'Error';
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    }
    return 'Error';
  }
}
