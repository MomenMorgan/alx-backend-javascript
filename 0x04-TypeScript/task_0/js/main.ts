export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
//create tow students

export const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  location: "New York",
};

export const student2: Student = {
  firstName: "Jane",
  lastName: "Snow",
  age: 25,
  location: "Cairo",
};

const studentsList: Array<Student> = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.getElementById("students-table");

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table?.appendChild(row);
  });
}
