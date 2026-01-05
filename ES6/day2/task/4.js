
const student = {
    name: "Tolba",
    university: "Aswan",
    faculty: "CS",
    finalGrade: "A+"
};

console.log(`${student.name} is a student in faculty of ${student.faculty} in university ${student.university} and his final grad is ${student.finalGrade}.`);


class Student {
    constructor(name, university, faculty, finalGrade) {
        this.name = name;
        this.university = university;
        this.faculty = faculty;
        this.finalGrade = finalGrade;
    }
    getInfo() {
        return `${this.name} is a student in faculty of ${this.faculty} in university ${this.university} and his final grad is ${this.finalGrade}.`;
    }
}

const student1 = new Student("Tolba", "Aswan", "CS", "A+");
console.log(student1.getInfo());