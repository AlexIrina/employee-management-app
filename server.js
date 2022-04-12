const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
// const cors = require('cors')
const path = require('path')

const app = express()

// app.use(cors())
app.use(express.json())

app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'client', 'build')))

// connect to DB
mongoose.connect(
	MONGO_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log(`Connected to Atlas DB`)
	}
)
// routes
app.use('/employees', require('./routes/employeesRouter'))

// error handling middleware
app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errorMessage: err.message })
})

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`The server is running on http://localhost:${PORT}`)
})
