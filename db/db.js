const dbPool = require ('./connection.js')

class Logic {
    constructor() {

    }
    async query(sql,options=[])
    { const client = await dbPool.connect()
        try{
            const result= await client.query(sql, options)
            return result
        }
        finally{
            client.release()
        }
    }
    findAllEmployees(){
        return this.query(
         "select employee.id, employee.first_name,employee.last_name,role.title,department.name as department,role.salary,concat(manager.first_name,' ', manager.last_name) as manager from employee left join role on employee.role_id = role.id left join department on role.department_id = department.id left join employee manager on manager.id = employee.manager_id;")
    }
    findAllDepartment(){
        return this.query('select * from department')
    }
    findAllRole(){
        return this.query('select * from role')   
    }
    createNewDepartment(deparmentName){
        return this.query('insert into department (name) values ($1)',[deparmentName])
    }
    createNewRole(RoleAnswers){
        const{title,salary,department_id}= RoleAnswers
        console.log(title,salary,department_id)
        return this.query('insert into role (title,salary,department_id) values ($1,$2,$3)',[title,salary,department_id])
    }
    createNewEmployee(EmployeeAnswers){
        const{first_name,last_name,role_id,manager_id}= EmployeeAnswers
        console.log(first_name,last_name,role_id,manager_id)
        return this.query('insert into employee (first_name,last_name,role_id,manager_id) values ($1,$2,$3,$4)',[first_name,last_name,role_id,manager_id])
    }
    updateExistingEmployee(updatedEmployeeRole){
        const{employee_id, role_id} = updatedEmployeeRole
        return this.query('update employee set role_id = $1 where id=$2 ',[role_id,employee_id])
    }
} 

module.exports= new Logic()