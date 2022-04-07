const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../models/employee')

// GET all employees
employeeRouter.get('/', (res, next) => {
	Employee.find((err, employee) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		res.status(200).send(employee)
	})
})

//TODO Lookup any employee by their id
employeeRouter.get('/:employeeId', (req, res, next) => {
	Employee.find({ _id: req.params.employeeId }, (err, foundEmployee) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(foundEmployee)
	})
})

//TODO POST/Add new employees
employeeRouter.post('/', (req, res, next) => {
	const newEmployee = new Employee(req.body)
	newEmployee.save((err, savedEmployee) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		res.status(201).send(savedEmployee)
	})
})

module.exports = employeeRouter
