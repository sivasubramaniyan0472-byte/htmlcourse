let students=[
    {
        name:"siva",
        age:21,
        mark:93
    },
    {
        name:"mani",
        age:20,
        mark:85
    },
    {
        name:"kopal",
        age:20,
        mark:35
    },
];
students.forEach(student=>{
    console.log("name:",student.name);
    console.log("age:",student.age);
    console.log("marks:",student.mark)
     
    if(students.mark >= 40){
        console.log("result: pass");
    }else{
        console.log("result: fail");
    }
}
);
let highest=students[0];
for (let student of students){
    if(students.marks > highest.mark){
        highest = student;
    }
}
console.log("highest name:",highest.name);
console.log("highest mark:",highest.mark);


