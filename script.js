const student = {
  name: "Ірина",
  surname: "Дяченко",
  birthYear: 2001,
  grades: [95, 88, 92],
  attendance: Array(20).fill(true).concat(Array(5).fill(null)), 
  getAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  getAverageGrade() {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  },
  getAttendanceRate() {
    const valid = this.attendance.filter(x => x !== null);
    return valid.filter(x => x).length / valid.length;
  },
  summary() {
    const grade = this.getAverageGrade();
    const attendance = this.getAttendanceRate();
    if (grade > 90 && attendance > 0.9) return "Молодець!";
    if (grade > 90 || attendance > 0.9) return "Добре, але можна краще";
    return "Редиска!";
  }
};


document.getElementById('studentName').textContent = `${student.name} ${student.surname}`;
document.getElementById('studentAge').textContent = student.getAge();
document.getElementById('studentGrade').textContent = student.getAverageGrade().toFixed(2);
document.getElementById('studentAttendance').textContent = (student.getAttendanceRate() * 100).toFixed(0) + "%";

const summary = student.summary();
const badge = document.getElementById('studentSummary');
badge.textContent = summary;

if (summary === "Молодець!") badge.classList.add('good');
else if (summary === "Добре, але можна краще") badge.classList.add('average');
else badge.classList.add('bad');