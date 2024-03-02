export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [propName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export const printTeacher = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`;
};

interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInterface{
  constructor(
    private firstName: string,
    private lastName: string,
  ) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
