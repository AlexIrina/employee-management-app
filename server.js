const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

// connect to DB
mongoose.connect('mongodb://localhost:27017/employeesDB', () => {
	console.log(`Connected to the DB successfully`)
})

app.use('/employees', require('./routes/employeesRouter'))

// error handling middleware
app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errorMessage: err.message })
})

app.listen(9000, () => {
	console.log('The server is running on local Port 9000!')
})
