const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const fields = lines.map((line) => line.split(','));
    const cs = [];
    const swe = [];
    const coun = fields.length - 1;

    for (let i = coun; i >= 0; i -= 1) {
      if (fields[i].includes('CS')) {
        cs.push(fields[i]);
        fields.splice(i, 1);
      } else if (fields[i].includes('SWE')) {
        swe.push(fields[i]);
        fields.splice(i, 1);
      }
    }
    console.log(`Number of students: ${coun}`);
    console.log(
      `Number of students in CS: ${cs.length}. List: ${cs
        .map((el) => el[0])
        .reverse()
        .join(', ')}`,
    );
    console.log(
      `Number of students in SWE: ${swe.length}. List: ${swe
        .map((el) => el[0])
        .reverse()
        .join(', ')}`,
    );
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
