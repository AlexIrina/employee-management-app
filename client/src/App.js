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
	const updateEmployee = (updates, employeeId) => {
		axios
			.put(`/employees/${employeeId}`, updates)
			.then(res => {
				setEmployees(prevEmployees =>
					// return employee as it is if it wasn't updated else return the updated employee res.data
					prevEmployees.map(employee =>
						employee._id !== employeeId ? employee : res.data
					)
				)
			})
			.catch(err => console.log(err))
	}

	const handleFilter = e => {
		if (e.target.value === 'all') {
			getAllEmployees()
		} else {
			// TODO: FIX ME
			axios
				.get(`employees/search/classification?classification=${e.target.value}`)
				.then(res => setEmployees(res.data))
				.catch(err => console.error(err))
		}
	}

	useEffect(() => {
		getAllEmployees()
	}, [])

	return (
		<div className='employee-container'>
			<EmployeeForm submit={addEmployee} btnText='Add Employee' />

			<div style={{ textAlign: 'center' }} className='filter-container'>
				<h4>Filter Employees</h4>

				<select className='filter-form' onChange={handleFilter}>
					<option value='all'>All Employees</option>
					<option value='full time'>Full-time</option>
					<option value='part time'>Part-time</option>
					<option value='contract'>Contract</option>
					<option value='intern'>Interns</option>
				</select>
			</div>

			{employees.map(employee => (
				<Employee
					key={employee._id}
					{...employee}
					deleteEmployee={deleteEmployee}
					updateEmployee={updateEmployee}
				/>
			))}
		</div>
	)
}

export default App
