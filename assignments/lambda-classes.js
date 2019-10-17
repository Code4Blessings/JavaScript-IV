// CODE here for your Lambda Classes
class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
    }
    speak() {
      return  `Hello my name is ${this.name}, I am from ${this.location}.` 
    }
}

class Instructor extends Person {
    constructor(attrs) {
    super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`
    }
}

class Student extends Person {
    constructor(assets) {
    super(assets);
        this.previousBackground = assets.previousBackground;
        this.className = assets.className;
        this.favSubjects = assets.favSubjects;
    }
    listSubjects() {
        for(let i=0; i < favSubjects.length; i++) {
            console.log(favSubjects[i]);
        }
    }
    pRAssignment(subject) {
        console.log(`${student.name} has submitted a PR for ${subject}.`)
    }
    sprintChallenge() {
        console.log(`${student.name} has begun sprint challenge on ${subject}.`)
    }
}

class PM extends Instructor {
    constructor(attributes) {
    super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel} @channel standy times!`);
    } 
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}
/*
Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`

*/
const newPerson = new Person({
    name: "Josh",
    age: 30,
    location: "New York"
});

const newInstructor = new Instructor({
    name: "Britney",
    age: 35,
    location: 'Chicago',
    specialty: "React",
    favLanguage: "Python",
    catchPhrase: "Put in the work few others will so that you can have the life few others can't",
});

const newStudent1 = new Student({
    name: "Michael",
    age: 25,
    location: 'Florida',
    previousBackground: 'Uber Driver',
    className: 'CS177',
    favSubjects: ['HTML', 'CSS', 'React']
});

const newStudent2 = new Student({
    name: "Daffney",
    age: 40,
    location: 'Virginia',
    previousBackground: 'Telemarketing',
    className: 'WebApp2',
    favSubjects: ['SQL', 'CSS', 'C#']
});

const newPM = new PM({
    name: "Christine",
    age: 45,
    location: 'Georgia',
    specialty: "JavaScript",
    favLanguage: "Python",
    catchPhrase: "Everyone should learn to program a computer. It teaches you how to think.",
    gradClassName: "WebPT04",
    favInstructor: "Dan Freyner"
})

console.log(newPerson.speak());
newInstructor.demo('Python');
newInstructor.grade(student = { name: 'Colt', location: 'Georgia' }, 'React');
console.log(newInstructor);
console.log(newStudent1.name);
console.log(newStudent2.name);
newStudent1.listSubjects();
newStudent2.pRAssignment('Data Science');
newStudent1.sprintChallenge('React');
console.log(newPM.name);
newPM.standUp('web12-christine', 'HTML');
newPM.debugsCode(student = { name: 'Crystal', location: 'Georgia' }, 'CSS');