import { useState, useEffect } from 'react'
import axios from 'axios'
import EmployeeForm from './components/EmployeeForm'
import Employee from './components/Employee'

function App() {
	const [employees, setEmployees] = useState([])

	// Get all employees
	const getAllEmployees = () => {
		axios
			.get('/employees')
			.then(res => setEmployees(res.data))
			.catch(err => console.log(err.response.data.errorMessage))
	}

	// Post a new employee
	const addEmployee = newEmployee => {
		axios
			.post('/employees', newEmployee)
			.then(res => setEmployees(prevEmployees => [...prevEmployees, res.data]))
			.catch(err => console.log(err))
	}

	// delete an employee
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
	// update employee
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
		<div className='employee-container'>
			<EmployeeForm submit={addEmployee} btnText='Add Employee' />

			<div style={{ textAlign: 'center' }} className='filter-container'>
				<h4>Filter Employees</h4>

				<select className='filter-form'>
					<option value='reset'>All Employees</option>
					<option value='fulltime'>Fill-time</option>
					<option value='parttime'>Part-time</option>
					<option value='contract'>Contract</option>
					<option value='intern'>Interns</option>
				</select>
			</div>

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
