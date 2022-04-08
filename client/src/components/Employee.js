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
	return (
		<div className='employee'>
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
				{/* !TODO: delete employee btn */}
				<button
					onClick={() => deleteEmployee(_id)}
					className='btn delete-btn'
					style={{ margin: '0 1rem' }}
				>
					Delete
				</button>
				{/* !TODO: edit employee btn */}
				<button className='edit-btn'>Edit</button>
			</div>
		</div>
	)
}
