// Write your solution in this file!
let  employee = { 
    name: "Allan",     
    streetAddress: "Ruiru,Nairobi"
};

function  updateEmployeeWithKeyAndValue(employee, key, value){
    let  newObject = { ...employee };
  
    newObject[key] = value;
  
    return  newObject ; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, key, value){

    employee[key] = value;
  
    return employee;

}
   function  deleteFromEmployeeByKey(employee, key) {
    let secondEmployee = { ...employee};
    delete secondEmployee[key]
    
      return secondEmployee

   }

   function  destructivelyDeleteFromEmployeeByKey(employee, key){
    let thirdObject  = {...employee};

    delete  employee[key];
    
    return employee
   }
  
   
   


     