/**
 * for MDN javaScript
 *   details of the object model
 *   
 * create at 08/24/18
 */

/**
 *     继承关系图
 *
 *            Employee
 *               |
 *          -----------
 *         |           |
 *      Manager    WorkerBee 
 *                     |
 *                -----------
 *               |           |
 *          SalesPerson   Engineer
 * 
 */

function Employee(name, dept){
  this.name = name || ''
  this.dept = dept || 'general'
}

function Manager(repos){
  Employee.call(this)
  this.reports = repos || []
}
Manager.prototype = Object.create(Employee.prototype)

function WorkerBee(projs){
  Employee.call(this)
  this.projects = projs || []
}
WorkerBee.prototype = Object.create(Employee.prototype)

function SalesPerson(quo){
  WorkerBee.call(this)
  this.dept = 'sales'
  this.quota = quo || 100
}
SalesPerson.prototype = Object.create(WorkerBee.prototype)

function Engineer(machine){
  WorkerBee.call(this)
  this.dept = 'engineering'
  this.machine = machine || ''
}
Engineer.prototype = Object.create(WorkerBee.prototype)

// 更灵活构造器

