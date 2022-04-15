import React from 'react'
import { useState, useRef, useEffect } from 'react'

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
	const refContainer = useRef(null)

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

	useEffect(() => {
		refContainer.current.focus()
	}, [])

	return (
		<form onSubmit={handleSubmit} className='form'>
			<div className='inputs-container'>
				<input
					type='text'
					ref={refContainer}
					name='firstName'
					value={inputs.firstName}
					onChange={handleChange}
					placeholder='enter first name...'
					className={inputs.firstName.length ? '' : 'error'}
					minLength='3'
					maxLength='12'
				/>

				<input
					type='text'
					name='lastName'
					value={inputs.lastName}
					onChange={handleChange}
					placeholder='enter last name...'
					className={inputs.lastName.length ? '' : 'error'}
					minLength='3'
					maxLength='12'
				/>
				<input
					type='email'
					name='email'
					value={inputs.email}
					onChange={handleChange}
					placeholder='enter email...'
					className={inputs.email.length ? '' : 'error'}
					pattern='.+@gmail\.com'
				/>
				<input
					type='text'
					name='phoneNumber'
					value={inputs.phoneNumber}
					onChange={handleChange}
					placeholder='enter phone number...'
					className={inputs.phoneNumber ? '' : 'error'}
					required
					pattern='[0-9]{3}[0-9]{3}[0-9]{4}'
				/>
				<input
					type='text'
					name='classification'
					value={inputs.classification}
					onChange={handleChange}
					placeholder='enter classification...'
					className={inputs.classification.length ? '' : 'error'}
					// oninvalid={this.setCustomValidity('Please Enter valid email')}
					required
				/>
				<input
					type='text'
					name='image'
					value={inputs.image}
					onChange={handleChange}
					placeholder='enter image url...'
					className={inputs.image ? '' : 'error'}
					required
				/>
				<br />
				<button className='add-btn'>{btnText}</button>
			</div>
		</form>
	)
}
