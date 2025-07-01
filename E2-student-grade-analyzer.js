const prompt = require("prompt-sync")();

function grade_calculator(){

    var numberOfScore;

    while (isNaN(numberOfScore)){
        numberOfScore = prompt("Enter number of scores: ").trim();
        if(isNaN(numberOfScore)){
            console.log("Please enter a valid number");
        } else {
            break;
        }
    }

    numberOfScore = parseInt(numberOfScore);

    var scoreStorage = []
    const studentName = prompt("Enter student name: ");
    var scoreTemp;

    for (let i = 0; i < numberOfScore; i++){

        while(isNaN(scoreTemp)){
            scoreTemp = prompt(`Enter score #${i+1}: `);
            if(isNaN(scoreTemp)){
                console.log("Please enter a valid score.")
            } else {
                break
            }
        }

        // scoreTemp = prompt(`Enter score #${i+1}: `);
        scoreStorage.push(parseInt(scoreTemp));
        scoreTemp = undefined;
    }

    var total = 0;

    for (let value of scoreStorage){
        total += value;
    }

    var average = total/numberOfScore;
    var grading;
    var status;


    if (average >= 90){
        grading = "A";
    } else if (average >= 80){
        grading = "B";
    } else if (average >= 70){
        grading = "C";
    } else if (average >= 60){
        grading = "D";
    } else if (average >= 50){
        grading = "E";
    } else {
        grading = "F"
    }





    if (average > 50){
        status = "Pass"
    } else {
        status = "Fail"
    }



    console.log(`Student: ${studentName}`);
    console.log(`Scores: ${scoreStorage.join(' ')}`);
    console.log(`Average Score: ${average}`);
    console.log(`Grade: ${grading}`)
    console.log(`Status: ${status}`);
    console.log(`Summary: Student ${studentName} got a ${grading} with an average of ${average}`);


    

}

grade_calculator();

// // GPT Code

// const prompt = require("prompt-sync")();

// function getValidNumberInput(message) {
//     let input;
//     do {
//         input = prompt(message).trim();
//         if (isNaN(input) || input === '') {
//             console.log("Please enter a valid number.");
//         }
//     } while (isNaN(input) || input === '');
//     return Number(input);
// }

// function getScores(count) {
//     const scores = [];
//     for (let i = 0; i < count; i++) {
//         const score = getValidNumberInput(`Enter score #${i + 1}: `);
//         scores.push(score);
//     }
//     return scores;
// }

// function calculateGrade(avg) {
//     if (avg >= 90) return "A";
//     if (avg >= 80) return "B";
//     if (avg >= 70) return "C";
//     if (avg >= 60) return "D";
//     if (avg >= 50) return "E";
//     return "F";
// }

// function grade_calculator() {
//     const numberOfScores = getValidNumberInput("Enter number of scores: ");
//     const studentName = prompt("Enter student name: ").trim();

//     const scores = getScores(numberOfScores);
//     const total = scores.reduce((sum, val) => sum + val, 0);
//     const average = total / numberOfScores;

//     const grade = calculateGrade(average);
//     const status = average > 50 ? "Pass" : "Fail";

//     console.log(`\nStudent: ${studentName}`);
//     console.log(`Scores: ${scores.join(' ')}`);
//     console.log(`Average Score: ${average.toFixed(2)}`);
//     console.log(`Grade: ${grade}`);
//     console.log(`Status: ${status}`);
//     console.log(`Summary: Student ${studentName} got a ${grade} with an average of ${average.toFixed(2)}.`);
// }

// grade_calculator();
