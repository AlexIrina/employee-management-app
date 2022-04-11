const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.use(morgan('dev'))

const CONNECTION_URL =
	'mongodb+srv://mongoAtlas:mpnoJWuGsEf4wPZz@cluster0.ugdcl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 9000

// connect to DB
mongoose.connect(
	CONNECTION_URL,
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

app.listen(PORT, () => {
	console.log(`The server is running on http://localhost:${PORT}`)
})
