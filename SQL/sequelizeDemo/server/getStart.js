// 入门

const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  // 仅限 SQLite
  storage: 'path/to/database.sqlite'
})

// 或者你可以简单地使用 uri 连接
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize.authenticate().then(()=>{
	console.log('Connection has been established successfully.')
}).catch(err => {
	console.error('Unable to connect to the database:', err)
})

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
})

// force: true 如果表已经存在，将会丢弃表
User.sync({force: true}).then(() => {
  // 表已创建
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
})

User.findAll().then(users => {
  console.log(users)
})