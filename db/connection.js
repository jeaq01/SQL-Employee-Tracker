const {Pool}=require('pg')
const { user, password, database, port } = require('pg/lib/defaults')

const dbPool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'employee_database',
    port: 5432

})

module.exports= dbPool