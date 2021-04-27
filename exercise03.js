// Example object and print statements

// Create your JavaScript objects
let person = {
   firstName: "Snow",
   lastName: "White",
   id: true,
   majors: {
      firstmajor: "Business",
      secondmajor: "Economics"
   },
   degrees: {
      firstdegree: "Commerce",
      seconddegree: "Statistics"
   },
   Courses:[
      {
         title: "home",
         category: "Infosys",
         categoryNum: "221",
         description: "Something",
         offered: "First Sem"
      },
      {
         title: "office",
         category: "Infosys",
         categoryNum: "221",
         description: "Something",
         offered: "First Sem"
      },
      {
         type: "mobile",
         category: "Infosys",
         categoryNum: "221",
         description: "Something",
         offered: "First Sem"
      }
   ],
   
} 

// print different properties of your objects
console.log("First name of person: " + person.firstName);
for (i in person.phoneNumbers) {
    console.log("Phone number: " + person.phoneNumbers[i].number);
}

const jsonStr = JSON.stringfy(person); 
console.log(jsonStr); 

// Create your JavaScript objects
function roster(firstName, id, username) {
   this.firstName = firstName;
   this.id = id;
   this.username = username;
} 

// let roster = new roster(firstname, id, username) 
