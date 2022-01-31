//Assignment 13
//1. Create a function that returns array of employees from a random time from 1 to 2 seconds using promise chaining.

const employeeArray = [
  {
      fName : "Shruti",
      email : "abcd@gmail.com",
      age : 20,
      id : 121,
      salary : 45000
  },
  {
      fName : "Sneha",
      email : "xyz@gmail.com",
      age : 22,
      id : 122,
      salary : 50000
  },
  {
      fName : "Pranay",
      email : "mno@gmail.com",
      age : 33,
      id : 123,
      salary : 62000
  },
];

const returnNewEmployeeArray = (employeeArray)=>{
    return new Promise((resolve , reject)=>{
        if (Array.isArray(employeeArray)) {
            resolve(employeeArray);
            
        }
        else{
            reject("Not an array.")
        }
    });
};
 
 returnNewEmployeeArray(employeeArray)
       .then((employeeArray)=>{
          setTimeout(() => {
         console.log(employeeArray)
     }, 2000);
 }
       )
      .catch((error)=>{
     console.log(error);
 });

 //2. Create another promisified function that sorts this employee list from above response by name. Chain it to above promise
  const compare = (a ,b)=>{
      if(a["fName"]<b["fName"]){
          return -1;
      }
      else if(a["fName"]>b["fName"]){
          return 1;
      }
      else{
          return 0;
      }
  }

  const sortEmployees = (employeeArray)=>{
    return new Promise((resolve , reject)=>{
        if (Array.isArray(employeeArray)) {
           const newArray = employeeArray.sort(compare);
            resolve(newArray);
            
        }
        else{
            reject("Not an array.")
        }
    });
};
 
returnNewEmployeeArray(employeeArray)
.then((employeeArray) => sortEmployees(employeeArray))
.then((newArray) => {
    console.log(newArray);
})
.catch((err) => {
    console.log(err);
});