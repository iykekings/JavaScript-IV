// CODE here for your Lambda Classes
class Person {
  constructor(personAttrs) {
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.location = personAttrs.location;
    this.gender = personAttrs.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
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
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
  changeGrade(student) {
    const grade = randomNum(1, 100);
    if (randomNum(1, 2) == 1) {
      // ADD, makes sure the score doesn't go over 100
      return student.grade + grade >= 100
        ? (student.grade = 100)
        : (student.grade += grade);
    } else {
      // SUBTRACT,  makes sure the score doesn't go below 0
      return student.grade - grade <= 0
        ? (student.grade = 0)
        : (student.grade -= grade);
    }
  }
}

class Student extends Person {
  constructor(stAttrs) {
    this.previousBackground = stAttrs.previousBackground;
    this.className = stAttrs.className;
    this.favSubjects = stAttrs.favSubjects;
    this.grade = sAttrs.grade;
  }
  listsSubjects() {
    this.favSubjects.forEach(singleSubject => console.log(singleSubject));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if (this.grade >= 70) {
      console.log(`${this.name} has graduated from Lambdaschool`);
    } else {
      console.log(
        `${
          this.name
        } is not yet ready to graduate from Lambdaschool, keep grading his assignments`
      );
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttrs) {
    super(pmAttrs);
    this.gradClassName = pmAttrs.gradClassName;
    this.favInstructor = pmAttrs.favInstructor;
  }
  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// helper functions
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Tests
const newStudent = new Student({
  name: 'Student1',
  location: 'Freetown',
  gender: 'Male',
  age: 26,
  previousBackground: 'Js',
  className: 'webeu2',
  favSubjetcs: ['CSS', 'JS', 'HTML'],
  grade: 17
});
const newStudent = new ProjectManager({
  name: 'PM1',
  location: 'Freetown',
  gender: 'Male',
  age: 26,
  specialty: 'Js',
  favLanguage: 'Typescript',
  catchPhrase: 'Valar Morghuilis',
  gradClassName: 'lamda001',
  favInstructor: 'Cabrejas'
});

// Console logs
