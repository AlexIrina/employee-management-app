import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
export default function SearchBar({
	placeholder,
	data,
	getEmployeeBySearchTerm,
	getAllEmployees,
}) {
	const [filterData, setFilterData] = useState([])
	const [enteredWord, setEnteredWord] = useState('')

	const handleFilter = event => {
		const wordEntered = event.target.value
		setEnteredWord(wordEntered)
		const newFilter = data.filter(value => {
			return value.firstName.toLowerCase().includes(wordEntered.toLowerCase())
		})
		if (wordEntered === '') {
			setFilterData([])
		} else {
			setFilterData(newFilter)
		}
	}

	const clearInput = () => {
		setFilterData([])
		setEnteredWord('')
		getAllEmployees()
	}

	const handleSubmit = e => {
		e.preventDefault()
		getEmployeeBySearchTerm(enteredWord)
	}

	return (
		<div className='search'>
			<div className='searchInputs'>
				<form onSubmit={handleSubmit}>
					<input
						name='enteredWord'
						type='text'
						value={enteredWord}
						placeholder={placeholder}
						onChange={handleFilter}
					/>
				</form>
				<div className='searchIcon'>
					{filterData.length === 0 ? (
						<SearchIcon className='searchIcon' />
					) : (
						<CloseIcon id='clearBtn' onClick={clearInput} />
					)}
				</div>
			</div>
			{filterData.length !== 0 && (
				<div className='dataResult'>
					{filterData.slice(0, 2).map((value, key) => (
						<div key={key} className='dataItem'>
							<p>
								{value.firstName} {value.lastName}
							</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}
