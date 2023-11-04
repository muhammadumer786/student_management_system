#! /usr/bin/env node
class School {
    name;
    students = [];
    teachers = [];
    addStudent(stdObj) {
        this.students.push(stdObj);
    }
    addTeacher(teacherObj) {
        this.teachers.push(teacherObj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
let School1 = new School("Falcon House");
let School2 = new School("Army Public");
// for students
let s1 = new Student("ali", 14, School1.name);
let s2 = new Student("khan", 15, School2.name);
let s3 = new Student("sara", 12, School2.name);
// for teachers
let t1 = new Teacher("sajid", 52, School1.name);
let t2 = new Teacher("ahmad", 45, School2.name);
let t3 = new Teacher("aliya", 38, School2.name);
// add students
School1.addStudent(s1);
School2.addStudent(s2);
School2.addStudent(s3);
// add teachers
School1.addTeacher(t1);
School2.addTeacher(t2);
School2.addTeacher(t3);
// console.log(t1)
// console.log(t2)
// console.log(t3)
// console.log(s1);
// console.log(s2);
// console.log(s3);
console.log(School1);
console.log(School2);
export {};
