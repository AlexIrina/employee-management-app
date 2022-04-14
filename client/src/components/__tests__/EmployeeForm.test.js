import React from 'react'
import { render, screen } from '@testing-library/react'
import EmployeeForm from '../EmployeeForm'
import '@testing-library/jest-dom'

test('firstName input should be rendered', () => {
	render(<EmployeeForm />)
	const userInputEl = screen.getByPlaceholderText(/enter firstName.../i)
	expect(userInputEl).toBeInTheDocument()
})

// test('lastName input should be rendered', () => {
// 	render(<EmployeeForm />)
// 	const lastNameInputEl = screen.getByPlaceholderText(/enter lastName.../i)
// 	expect(lastNameInputEl).toBeInTheDocument()
// })

// test('email input should be rendered', () => {
// 	render(<EmployeeForm />)
// 	const emailInputEl = screen.getByPlaceholderText(/enter email.../i)
// 	expect(emailInputEl).toBeInTheDocument()
// })

// test('phone number input should be rendered', () => {
// 	render(<EmployeeForm />)
// 	const phoneInputEl = screen.getByPlaceholderText(/enter phone number.../i)
// 	expect(phoneInputEl).toBeInTheDocument()
// })

// test('classification input should be rendered', () => {
// 	render(<EmployeeForm />)
// 	const userInputEl = screen.getByPlaceholderText(/enter classification.../i)
// 	expect(userInputEl).toBeInTheDocument()
// })

// test('image input should be rendered', () => {
// 	render(<EmployeeForm />)
// 	const imageInputEl = screen.getByPlaceholderText(/enter image.../i)
// 	expect(imageInputEl).toBeInTheDocument()
// })
