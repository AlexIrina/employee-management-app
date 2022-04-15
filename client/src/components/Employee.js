import { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import CloseIcon from '@mui/icons-material/Close'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone'
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
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
						<h2>
							{firstName} {lastName}
						</h2>
						<img
							src={image}
							alt={`add img for ${firstName}`}
							style={{ height: '200px' }}
						/>
					</div>
					<div className='description'>
						<p>
							{' '}
							{classification.charAt(0).toUpperCase() +
								classification.slice(1)}{' '}
							Employee
						</p>
						<p>
							{' '}
							<MailOutlineTwoToneIcon /> {email}
						</p>
						<p>
							{' '}
							<LocalPhoneSharpIcon /> {phoneNumber}
						</p>
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
						btnText={<PublishedWithChangesIcon />}
						submit={handleSubmit}
					/>
					<button
						className='close-btn'
						onClick={() => setEditToggle(prevToggle => !prevToggle)}
					>
						<CloseIcon className='closeIcon' />
					</button>
				</>
			)}
		</article>
	)
}
