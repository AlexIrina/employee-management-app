import { useState } from 'react'

export default function EmployeeForm({
	firstName,
	lastName,
	email,
	phoneNumber,
	image,
	classification,
	submit,
	_id,
	btnText,
}) {
	const initialInputs = {
		firstName: firstName || '',
		lastName: lastName || '',
		email: email || '',
		phoneNumber: phoneNumber || '',
		image: image || '',
		classification: classification || '',
	}
	const [inputs, setInputs] = useState(initialInputs)

	const handleChange = e => {
		const { name, value } = e.target
		setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
	}

	const handleSubmit = e => {
		e.preventDefault()
		// add a new employee --POST --PUT
		submit(inputs, _id)
		// clears inputs
		setInputs(initialInputs)
	}
	return (
		<form
			onSubmit={handleSubmit}
			className='form'
			style={{ display: 'flex', gap: '2px' }}
		>
			<div className='inputs-container'>
				<input
					type='text'
					name='firstName'
					value={inputs.firstName}
					onChange={handleChange}
					placeholder='enter firstName...'
				/>

				<input
					type='text'
					name='lastName'
					value={inputs.lastName}
					onChange={handleChange}
					placeholder='enter lastName...'
				/>
				<input
					type='text'
					name='email'
					value={inputs.email}
					onChange={handleChange}
					placeholder='enter email...'
				/>
				<input
					type='number'
					name='phoneNumber'
					value={inputs.phoneNumber}
					onChange={handleChange}
					placeholder='enter phone number...'
				/>
				<input
					type='text'
					name='classification'
					value={inputs.classification}
					onChange={handleChange}
					placeholder='enter classification'
				/>
				<input
					type='text'
					name='image'
					value={inputs.image}
					onChange={handleChange}
					placeholder='enter image...'
				/>
				<br />
				<button className='add-btn '>{btnText}</button>
			</div>
		</form>
	)
}
