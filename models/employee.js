const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: true,
	},
	image: {
		type: String,
	},
})

module.exports = mongoose.model('Employee', employeeSchema)
