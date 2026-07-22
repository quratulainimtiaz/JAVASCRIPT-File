function Student(name) {
    this.name = name;
}

Student.prototype.study = function () {
    console.log(this.name + " is studying");
};

const s1 = new Student("Sara");
s1.study();