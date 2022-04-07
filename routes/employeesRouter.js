const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../models/employee')

// Get all employees
employeeRouter.get('/', (res, next) => {
	Employee.find((err, employee) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		res.status(200).send(employee)
	})
})

module.exports = employeeRouter
