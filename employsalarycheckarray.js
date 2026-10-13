let employees = [
    {
        name: "Prabha",
        department: "HR",
        salary: 35000
    },
    {
        name: "Arun",
        department: "IT",
        salary: 45000
    },
    {
        name: "Siva",
        department: "Sales",
        salary: 28000
    },
    {
        name: "Kumar",
        department: "IT",
        salary: 50000
    },
    {
        name: "Ravi",
        department: "HR",
        salary: 32000
    }
];

function employeeSalary() {

    let highestSalary = 0;
    let highestEmployee = "";
    let totalSalary = 0;

    console.log("ALL EMPLOYEES");

    for (let employee of employees) {

        console.log(
            employee.name + " - " +
            employee.department + " - ₹" +
            employee.salary
        );

        if (employee.salary > 30000) {
            console.log("Salary greater than 30000:", employee.name);
        }

        if (employee.salary > highestSalary) {
            highestSalary = employee.salary;
            highestEmployee = employee.name;
        }


        totalSalary = totalSalary + employee.salary;
    }

    console.log("----------------------");

    console.log("Highest Salary:", highestSalary);
    console.log("Highest Salary Employee:", highestEmployee);

    console.log("Total Salary:", totalSalary);

    
    console.log("IT Department Employees:");

    for (let employee of employees) {

        if (employee.department == "IT") {
            console.log(employee.name);
        }
    }
}

employeeSalary();