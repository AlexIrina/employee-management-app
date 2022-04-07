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

//Lookup any employee by their id's
employeeRouter.get('/:employeeId', (req, res, next) => {
	Employee.find({ _id: req.params.employeeId }, (err, foundEmployee) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(foundEmployee)
	})
})

//POST/Add new employees
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

//TODO Update Employees information
employeeRouter.put('/:employeeId', (req, res, next) => {
	Employee.findOneAndUpdate(
		{ _id: req.params.employeeId }, //find this one to update
		req.body, //update the object with this data
		{ new: true }, //send back the updated version of the object
		(err, updatedEmployee) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(201).send(updatedEmployee)
		}
	)
})

//TODO Delete employee from the database
employeeRouter.delete('/:employeeId', (req, res, next) => {
	Employee.findOneAndDelete(
		{ _id: req.params.employeeId },
		(err, deletedEmployee) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res
				.status(200)
				.send(
					`Successfully deleted employee: ${deletedEmployee.firstName} from the database`
				)
		}
	)
})

module.exports = employeeRouter
