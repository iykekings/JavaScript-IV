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

class Student extends Person {
    constructor(stAttrs) {
        this.previousBackground = stAttrs.previousBackground;
        this.className = stAttrs.className;
        this.favSubjects = stAttrs.favSubjects;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
}