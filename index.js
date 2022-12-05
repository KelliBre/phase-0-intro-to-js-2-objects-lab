// Write your solution in this file!
const employee = {
    name: 'Kelli',
    streetAddress: '123 Darling Land',
}

function updateEmployeeWithKeyAndValue(employee, name, value){
const newEmployeeObj = {
...employee,
};
newEmployeeObj.name='Sam';
newEmployeeObj.streetAddress='11 Broadway'
return newEmployeeObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(){
    employee.streetAddress='12 Broadway'
    return employee
}

function deleteFromEmployeeByKey(employee, name){
const newEmployee = {
...employee,
}
delete newEmployee.name
return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name
    return employee
}