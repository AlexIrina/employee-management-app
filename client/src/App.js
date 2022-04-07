import { useState, useEffect } from 'react'
import axios from 'axios'

import Employee from './components/Employee'

function App() {
	const [employees, setEmployees] = useState([])

	//TODO Get all employees
	const getAllEmployees = () => {
		axios
			.get('/employees')
			.then(res => setEmployees(res.data))
			.catch(err => console.log(err.response.data.errorMessage))
	}

	//TODO Post a new employee
	const addEmployee = newEmployee => {
		axios
			.post('/employees', newEmployee)
			.then(res => setEmployees(prevEmployees => [...prevEmployees, res.data]))
			.catch(err => console.log(err))
	}

	//TODO delete an employee
	const deleteEmployee = employeeId => {
		axios
			.delete(`/employees/${employeeId}`)
			.then(res => {
				setEmployees(prevEmployees =>
					prevEmployees.filter(employee => employee._id !== employeeId)
				)
			})
			.catch(err => console.log(err))
	}
	//TODO update employee
	const editEmployee = (updates, employeeId) => {
		axios
			.put(`/employees/${employeeId}`, updates)
			.then(res => {
				setEmployees(prevEmployees =>
					prevEmployees.map(employee =>
						employee._id !== employeeId ? employee : res.data
					)
				)
			})
			.catch(err => console.log(err))
	}

	useEffect(() => {
		getAllEmployees()
	}, [])

	return (
		<div className='App'>
			{employees.map(employee => (
				<Employee
					key={employee._id}
					{...employee}
					deleteEmployee={deleteEmployee}
					editEmployee={editEmployee}
				/>
			))}
		</div>
	)
}

export default App
