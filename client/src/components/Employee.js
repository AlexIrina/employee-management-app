import { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import CloseIcon from '@mui/icons-material/Close'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

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
		<article className='article-summary'>
			{!editToggle ? (
				<>
					<div className='image-wrapper'>
						<img
							src={image}
							alt={`add img for ${firstName}`}
							style={{ height: '200px' }}
						/>
					</div>
					<div className='description'>
						<h3>
							Full Name: {firstName} {lastName}
						</h3>

						<p>Classification: {classification}</p>
						<p>Email: {email}</p>
						<p>Phone number: {phoneNumber}</p>
					</div>
					<div className='btn-container'>
						<button
							data-testid='delete-btn'
							onClick={() => deleteEmployee(_id)}
							className='btn delete-btn'
							style={{ margin: '0 1rem' }}
						>
							<DeleteForeverIcon />
						</button>

						<button
							className='edit-btn'
							onClick={() => setEditToggle(prevToggle => !prevToggle)}
						>
							<ModeEditIcon />
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
						<CloseIcon />
					</button>
				</>
			)}
		</article>
	)
}
