import React from 'react'
import Typed from 'react-typed'
import { StyledSearch } from './styles'
import { FiSearch } from 'react-icons/fi'
// import SearchIcon from 'public/icons/search.svg'

const Search: React.FC = () => {
	return (
		<StyledSearch>
			<Typed
				strings={['টাইপ করুন...', 'সমাধান পান...', 'নিজের মাতৃভাষায়...']}
				typeSpeed={60}
				backSpeed={60}
				attr="placeholder"
				loop
			>
				<input type="text" />
			</Typed>
			<FiSearch className="search-icon" />
		</StyledSearch>
	)
}

export default Search
