// const objNames = [
//     { name: "Alice", age: 18 },
//     { name: "Bob", age: 19 },
//     { name: "Charlie", age: 20 }
//   ]

// const arrNames = objNames.map((obj) => `${obj.name} is ${obj.age} years old`);
// console.log(arrNames.join("\n"));

// const grades = [88, 43, 76, 99, 62, 50, 90];
// const passedGrades = grades.filter(grade => grade > 75);
// console.log(passedGrades);

// const shoppingCart = [250, 130, 99, 499];
// const total = shoppingCart.reduce((acc, price) => acc+price);
// console.log(total);


// Exercise 1
// const student = [
//     { name: "Alice", scores: [90, 95, 88] },
//     { name: "Bob", scores: [70, 60, 72] },
//     { name: "Charlie", scores: [85, 87, 84] },
//     { name: "Daisy", scores: [50, 55, 60] }
//   ]

// const aveStudent = student.map((student => {
//     let score = student.scores;
//     student.ave = score.reduce((sum, score) => sum+score) / score.length;
//     return student;
// }))

// const passedStudent = aveStudent.filter(stud => stud.ave > 75);

// const classAve = (passedStudent.reduce((acc, student) => acc + student.ave, 0)/passedStudent.length).toFixed(2);
// console.log(passedStudent);
// console.log(`Total Passing: ${passedStudent.length}`)
// console.log(`Class Average: ${classAve}`);

// Exercise 2
const employee = [
    { name: "Alice", department: "IT", salaries: [32000, 31000, 33000, 30000, 30500, 31000] },
    { name: "Bob", department: "HR", salaries: [28000, 27000, 26000, 25000, 25500, 26000] },
    { name: "Charlie", department: "Finance", salaries: [40000, 42000, 41000, 40500, 41500, 40000] },
    { name: "Diana", department: "Marketing", salaries: [29000, 29500, 30000, 31000, 32000, 30000] }
  ]
  
const employeeAve = employee.map(employee => 
    {return {...employee, averageSalary: ((employee.salaries.reduce((acc, salary) => acc+salary))/employee.salaries.length)}}
);

const highEarners = employeeAve.filter(employee => employee.averageSalary > 30000)
const totalPayroll = highEarners.reduce((acc, employee) => {
    return acc+employee.averageSalary}, 0)/highEarners.length;


console.log(`Employees with average salary:`);
console.log(employeeAve);

console.log("Top Earners")
console.log(highEarners);

console.log(`Total Top Earners: ${highEarners.length}`);
console.log(`Total Monthly Payroll: ${totalPayroll.toFixed(2)}`);


//GPT Code

// const employee = [
//     { name: "Alice", department: "IT", salaries: [32000, 31000, 33000, 30000, 30500, 31000] },
//     { name: "Bob", department: "HR", salaries: [28000, 27000, 26000, 25000, 25500, 26000] },
//     { name: "Charlie", department: "Finance", salaries: [40000, 42000, 41000, 40500, 41500, 40000] },
//     { name: "Diana", department: "Marketing", salaries: [29000, 29500, 30000, 31000, 32000, 30000] }
//   ];
  
//   // Step 1: Map with average salary
//   const employeeWithAverage = employee.map(({ name, department, salaries }) => {
//     const total = salaries.reduce((sum, val) => sum + val, 0);
//     const average = total / salaries.length;
//     return { name, department, salaries, averageSalary: average };
//   });
  
//   // Step 2: Filter top earners
//   const topEarners = employeeWithAverage.filter(emp => emp.averageSalary > 30000);
  
//   // Step 3: Calculate average of top earners
//   const totalPayroll = topEarners.reduce((acc, emp) => acc + emp.averageSalary, 0) / topEarners.length;
  
//   // Output
//   console.log("Employees with average salary:");
//   console.log(employeeWithAverage);
  
//   console.log("\nTop Earners:");
//   console.log(topEarners);
  
//   console.log(`\nTotal Top Earners: ${topEarners.length}`);
//   console.log(`Total Monthly Payroll: ${totalPayroll.toFixed(2)}`);
  