// CODE here for your Lambda Classes
class Person{
    constructor(personAttrs) {
       this.name = personAttrs.name;
       this.age = personAttrs.age;
       this.location = personAttrs.location;
       this.gender = personAttrs.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(insAttrs) {
        super(insAttrs);
        this.specialty = insAttrs.specialty;
        this.favLanguage = insAttrs.favLanguage;
        this.catchPhrase = insAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student,subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}