import { useState } from 'react'
import EmployeeForm from './EmployeeForm'

export default function Employee({
	firstName,
	lastName,
	email,
	phoneNumber,
	classification,
	image,
	_id,
	deleteEmployee,
	updateEmployee,
}) {
	const [editToggle, setEditToggle] = useState(false)

	const handleSubmit = (inputs, _id) => {
		setEditToggle(false)
		updateEmployee(inputs, _id)
	}

	return (
		<div className='employee-card'>
			{!editToggle ? (
				<>
					<h2>
						Full Name:
						{firstName} {lastName}
					</h2>
					<img
						src={image}
						alt={`add img for ${firstName}`}
						style={{ height: '200px' }}
					/>
					<p>Classification:{classification}</p>
					<p>Email: {email}</p>
					<p>Phone number: {phoneNumber}</p>
					<div className='btn-container'>
						<button
							onClick={() => deleteEmployee(_id)}
							className='btn delete-btn'
							style={{ margin: '0 1rem' }}
						>
							Delete
						</button>

						<button
							className='edit-btn'
							onClick={() => setEditToggle(prevToggle => !prevToggle)}
						>
							Edit
						</button>
					</div>
				</>
			) : (
				<>
					<EmployeeForm
						firstName={firstName}
						lastName={lastName}
						phoneNumber={phoneNumber}
						classification={classification}
						email={email}
						image={image}
						_id={_id}
						btnText='Submit Changes'
						submit={handleSubmit}
					/>
					<button
						className='close-btn'
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						Close
					</button>
				</>
			)}
		</div>
	)
}
