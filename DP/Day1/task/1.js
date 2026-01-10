class Student {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    createStudent(){
        return StudentFactory.create(this.name, this.type);
    }
}


class StudentFactory {
    static create(name, type){
        return new Student(name, type);
    }
}

const s1 = new Student("Tolba", "ITI student").createStudent();
console.log(s1);