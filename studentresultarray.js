let students = [
    {
        name: "Arun",
        age: 18,
        marks: 78
    },
    {
        name: "Siva",
        age: 19,
        marks: 65
    },
    {
        name: "Mani",
        age: 18,
        marks: 35
    },
    {
        name: "Kumar",
        age: 20,
        marks: 90
    },
    {
        name: "Ravi",
        age: 19,
        marks: 45
    }
];

function studentResult() {

    let highestMarks = 0;
    let highestStudent = "";
    let totalMarks = 0;

    for (let student of students) {

        console.log("Name:", student.name);
        console.log("Marks:", student.marks);

        if (student.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }

        if (student.marks > highestMarks) {
            highestMarks = student.marks;
            highestStudent = student.name;
        }

        totalMarks = totalMarks + student.marks;

        console.log("----------------");
    }

    let average = totalMarks / students.length;

    console.log("Highest Mark:", highestMarks);
    console.log("Highest Mark Student:", highestStudent);
    console.log("Average Marks:", average);
}

studentResult();