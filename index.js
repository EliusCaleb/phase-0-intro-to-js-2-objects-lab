// Write your solution in this file!
let  employee = { 
    name: "Allan",     
    streetAddress: "Ruiru,Nairobi"
};
/*function  updateEmployeeWithKeyAndValue(employee, key, value){
    let  newObject = { ...employee };
  
    newObject[key] = value;
  
    return  newObject ; 
} */

let  updateEmployeeWithKeyAndValue=(employee,key,value)=>{
     let newObject={...employee};
     newObject[key]=value;
     return newObject;
};


let  destructivelyUpdateEmployeeWithKeyAndValue=(employee,key,value)=>{
    employee[key]=value
     return employee;
};

/*
  function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value){

    employee[key] = value;
  
    return employee;

}
 */
let deleteFromEmployeeByKey=(employee, key)=>{
    let newObject={...employee}
    delete newObject[key];
    return newObject;
};
/*
  function  deleteFromEmployeeByKey(employee, key) {
    let secondEmployee = { ...employee};
    delete secondEmployee[key]
    
      return secondEmployee

   }
*/

let destructivelyDeleteFromEmployeeByKey=(employee, key)=>{
    delete employee[key];
    return employee; 
};
/*
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    let thirdObject  = {...employee};

    delete  employee[key];
    
    return employee
   }
  
*/
 