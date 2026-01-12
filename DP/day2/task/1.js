class Teacher {
    constructor(name) { this.name = name; }
    details() { console.log(this.name); }
}

function decorate(teacher, salary, nation, street) {
    teacher.salary = salary;
    teacher.nation = nation;
    teacher.street = street;
    teacher.details = function() {
        console.log(this.name, this.salary, this.nation, this.street);
    }
    return teacher;
}

const t = decorate(new Teacher("Alex"), 5000, "US", "5th Ave");
t.details();