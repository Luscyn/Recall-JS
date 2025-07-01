import students from './data/students.json' assert {type: 'json'}; // For ES modules modern JS ES6+

// const students = require("./data/students.json"); For CommonJS - older and native

// console.log(students);

// in for objects
// of for arrays


const summary = (name, ave, grade, guardian, contact) => { 
    return `${name} got a ${grade} (${ave}). Guardian: ${guardian} (${contact})`  
}

function grade_evaluator(ave){
    let grade
    if (ave > 90){
        grade = "A";
    } else if (ave > 80){
        grade = "B";
    } else if (ave > 70){
        grade = "C";
    } else if (ave > 60){
        grade = "D";
    } else {
        grade = "F";
    }

    return grade;
}

function checkValidity(grades){
    if (grades == undefined || grades == null){
        throw new Error("Scores not provided");
    } else if (grades.length == 0 ){
        throw new Error("No scores to calculate");
    }
    
    for (let grade of grades){
        if (isNaN(grade)){
            throw new Error("Invalid score detected in scores")
        }
    }
}

function student_evaluator(){
    for (let student of students){
    
        const {name, scores, 
            info: {guardian: {
                name: guardian_name, 
                contact = 'N/A'}
            }
        } = student;
    
        let ave;
        

        try {
            checkValidity(scores);

            ave = (scores.reduce((sum, value) => sum + value, 0)/scores.length).toFixed(2);

            let grade = grade_evaluator(ave);

            console.log(`Student: ${name}`);
            console.log(`Average Score: ${ave}`);
            console.log(`Grade: ${grade}`);
            console.log(`Guardian: ${guardian_name} ${contact}`);

            console.log(summary(name, ave, grade, guardian_name, contact));


        } catch (error){
            console.log(`Error processing ${name}: ${error.message}`);
        } finally {
            console.log('--- Student Done ---')
        }
    }
}

student_evaluator();

// GPT CODE

// import students from './data/students.json' assert { type: 'json' };

// // Utility: Summarize student info
// const summarizeStudent = (name, ave, grade, guardian, contact) => 
//   `${name} got a ${grade} (${ave}). Guardian: ${guardian} (${contact})`;

// // Utility: Grade evaluator
// function evaluateGrade(average) {
//   if (average > 90) return "A";
//   if (average > 80) return "B";
//   if (average > 70) return "C";
//   if (average > 60) return "D";
//   return "F";
// }

// // Utility: Validate scores array
// function validateScores(scores) {
//   if (!scores) throw new Error("Scores not provided");
//   if (scores.length === 0) throw new Error("No scores to calculate");
//   for (const score of scores) {
//     if (isNaN(score)) throw new Error("Invalid score detected in scores");
//   }
// }

// // Logic: Process a single student
// function processStudent(student) {
//   const { name, scores, info: { guardian: { name: guardianName, contact = 'N/A' } } } = student;

//   try {
//     validateScores(scores);

//     const average = (scores.reduce((sum, val) => sum + val, 0) / scores.length).toFixed(2);
//     const grade = evaluateGrade(average);

//     console.log(`\n📘 Student: ${name}`);
//     console.log(`Average Score: ${average}`);
//     console.log(`Grade: ${grade}`);
//     console.log(`Guardian: ${guardianName} (${contact})`);
//     console.log(summarizeStudent(name, average, grade, guardianName, contact));

//   } catch (error) {
//     console.log(`❌ Error processing ${name}: ${error.message}`);
//   } finally {
//     console.log('✅ --- Student Done ---');
//   }
// }

// // Master function
// function evaluateStudents() {
//   for (const student of students) {
//     processStudent(student);
//   }
// }

// evaluateStudents();
