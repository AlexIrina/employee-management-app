const express = require('express')
const employeeRouter = express.Router()
const Employee = require('../models/employee')

// GET all employees
employeeRouter.get('/', (req, res, next) => {
	Employee.find((err, employees) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		res.status(200).send(employees)
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

// TODO get employee(s) by search term localhost:9000/employees/search?employee=na  -->returns Nadia
employeeRouter.get('/search/employee', (req, res, next) => {
	console.log(req.query)
	// search term

	const { employee } = req.query
	// creates a regular expression out of the string "employee"
	const pattern = new RegExp(employee) // -- /employee/
	// find all employees by firstName. $options: 'i'  Case insensitive -lower or uppercase
	Employee.find(
		{ firstName: { $regex: pattern, $options: 'i' } },
		(err, employees) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(200).send(employees)
		}
	)
})

// specific request to search by classification ---employees/search/classification?classification=fulltime
employeeRouter.get('/search/classification', (req, res, next) => {
	Employee.find(
		{ classification: req.query.classification },
		(err, employees) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(201).send(employees)
		}
	)
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

// Update Employee information
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

// Delete employee from the database
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
					`Successfully deleted ${
						deletedEmployee.firstName + ' ' + deletedEmployee.lastName
					} from the database`
				)
		}
	)
})

module.exports = employeeRouter
