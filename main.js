import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (persons) => {
    do {
        console.log("Welcome guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "To whom you want to chat...",
            name: "select",
            choices: ["My Self", "student"],
        });
        if (ans.select == "My Self") {
            console.log("I want to chat to my self");
            console.log("My health is good now.");
        }
        if (ans.select == "student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "To which student you want to chat.",
                name: "student",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name} and i am perfectly fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I am ${student.name}, and i am perfectly fine...............`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programmStart(persons);
