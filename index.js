const inquirer = require("inquirer")
const logic = require("./db/db.js")
const { rows } = require("pg/lib/defaults")
function main() {

  inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All employee",
        "Create department",
        "Create Role",
        "Create Employee",
        "Update an employee role",
        "Exit"
      ]
    }
  ])
    .then(answers => {
      if (answers.action == "View All Departments") {
        viewDeparments()
      }
      if (answers.action == "View All Roles") {
        viewRoles()
      }
       if (answers.action == "View All employee") {
        viewEmployee()
      }
      if (answers.action == "Create department") {
        createDepartment()
      }
      if (answers.action == "Create Role") {
        createRole()
      }
      if (answers.action == "Create Employee") {
        createEmployee()
      }
      if (answers.action == "Update an employee role") {
        UpdateEmployee()
      }
      if (answers.action == "Exit") {
        Exit()
      }
    })
}

function viewEmployee() {
  console.log (logic)
  logic.findAllEmployees().then(({ rows }) => {
    console.table(rows)
    console.log('\n')
  }).then(() => main())

}
function viewRoles (){
  logic.findAllRole().then(({ rows }) => {
    console.table(rows)
    console.log('\n')
  }).then(() => main())

}
function viewDeparments (){
  logic.findAllDepartment().then(({ rows }) => {
    console.table(rows)
    console.log('\n')
  }).then(() => main())
}
function createDepartment () {
inquirer.prompt([{
  name: "departmentName",
  message: "whats the name of the new deparment"

}]) .then((answer)=>{
  logic.createNewDepartment(answer.departmentName).then(() => {
    console.log('\n')
    console.log("edited a new deparment")
  }).then(() => main()) 
})
}
function createRole () {
  inquirer.prompt([{
    name: "title",
    message: "whats the name of the new role"
  
  },{
    name:"salary",
    message: "whats the salary of the new role"
  },{
    name: "department_id",
    message: "whats the department of the new role"
  }]) .then((answer)=>{
    logic.createNewRole(answer).then(() => {
      console.log('\n')
      console.log("edited a new deparment")
    }).then(() => main()) 
  })
}

function createEmployee(){
  inquirer.prompt([{
    name: "first_name",
    message: "whats the name of the new employee"
  },{
    name:"last_name",
    message: "whats the last_name of the new employee"
  },{
    name: "role_id",
    message: "whats the role of the new employee"
  },{
    name:"manager_id",
    message: "whats the manager_id of the new employee"
    
  }]) .then((answer)=>{
    logic.createNewEmployee(answer).then(() => {
      console.log('\n')
      console.log("edited a new role")
    }).then(() => main()) 
  })
}

function UpdateEmployee(){
  inquirer.prompt([{
    name: "employee_id",
    message: "whats the ID of the employee you wanna update"
  },{
    name:"role_id",
    message: "whats the ID of the employee's new role"
  
  }]) .then((answer)=>{
    logic.updateExistingEmployee(answer).then(() => {
      console.log('\n')
      console.log("new role assigned to employee")
    }).then(() => main()) 
  })
}

function Exit(){
  process.exit();
}

main ()
