const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data
          .trim()
          .split('\n')
          .filter((line) => line.trim() !== '');
        const fields = lines.map((line) => line.split(','));
        const cs = [];
        const swe = [];

        fields.forEach((student) => {
          if (student[3] === 'CS') {
            cs.push(student[0]);
          } else if (student[3] === 'SWE') {
            swe.push(student[0]);
          }
        });

        console.log(`Number of students: ${fields.length}`);
        console.log(
          `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`,
        );
        console.log(
          `Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`,
        );

        resolve();
      }
    });
  });
}

module.exports = countStudents;
