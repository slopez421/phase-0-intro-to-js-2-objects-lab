// Write your solution in this file!
const employee = {
    name: "Sherlock",
    address: "221B Baker Street"
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
   
   const newEmployee = {...employee};
   newEmployee[key];
   delete newEmployee.name;
   return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key];
    delete employee.name;
    return employee;

}