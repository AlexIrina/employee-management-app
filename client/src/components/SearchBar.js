import React from 'react'

export default function SearchBar(props) {
	const { data, placeholder } = props

	return (
		<div className='search'>
			<div className='searchInputs'>
				<input type='text' placeholder={placeholder} />
				<div className='searchIcon'></div>
			</div>
			<div className='dataResult'></div>
		</div>
	)
}
