const students = [
    {
      name: "Alice",
      scores: [90, 92, 88],
      info: {
        age: 18,
        city: "Manila",
        guardian: {
          name: "Mr. Cruz",
          contact: "09123456789"
        }
      }
    },
    {
      name: "Bob",
      scores: [70, 72, 75],
      info: {
        age: 19,
        city: "Cebu",
        guardian: {
          name: "Mrs. Santos",
          // contact missing
        }
      }
    },
    {
      name: "Charlie",
      scores: [50, 60, 65],
      info: {
        age: 20,
        city: "Davao",
        guardian: {
          name: "Mr. Tan",
          contact: "09876543210"
        }
      }
    }
  ]
  
for (let student of students){
    let {name, scores, info: { city, guardian: { name: guardian_name, contact = "N/A"}}} = student;
    let grade;
    let remark;



    // const ave = scores.reduce((accumulator, currentvalue) => {
    //     return accumulator + currentvalue;
    // }, 0);

    const ave = (scores.reduce((sum, val)=>sum+val, 0)/scores.length).toFixed(2);




    if (ave > 90){
        grade = "A";
        remark = "Excellent";
    } else if (ave > 80){
        grade = "B";
        remark = "Good";
    } else if (ave > 70){
        grade = "C";
        remark = "Satisfactory";
    } else if (ave > 60){
        grade = "D";
        remark = "Needs Improvement";
    } else {
        grade = "F";
        remark = "Needs Improvement";
    }

    console.log(`Student: ${name}`);
    console.log(`Lives in: ${city}`);
    console.log(`Guardian: ${guardian_name} (${contact})`);
    console.log(`Average Score: ${ave}`);
    console.log(`Grade: ${grade}`);
    console.log(`Remark: ${remark}`);
    console.log("")


    
}