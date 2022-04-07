import React from 'react'

export default function Employee({
	firstName,
	lastName,
	email,
	phoneNumber,
	image,
}) {
	return (
		<div className='employee-container'>
			<img src={image} alt={firstName} style={{ height: '200px' }} />
			<h1>Employee Information</h1>
			<h2>
				Full Name:
				{firstName} {lastName}
			</h2>
			<p>Email: {email}</p>
			<p>Phone number: {phoneNumber}</p>
		</div>
	)
}
