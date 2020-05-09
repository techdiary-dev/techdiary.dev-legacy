import React from 'react'
import { StyledSearch } from './styles'
import SearchIcon from 'static/icons/search.svg'

const Search: React.FC = () => {
	return (
		<StyledSearch>
			<input type="text" placeholder="কিছু খুঁজে পেয়ে টাইপ করুন..." />
			<SearchIcon />
		</StyledSearch>
	)
}

export default Search
