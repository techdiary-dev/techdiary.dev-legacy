import React from 'react'
import Typed from 'react-typed'
import { StyledSearch } from './styles'
import SearchIcon from 'static/icons/search.svg'

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
			<SearchIcon />
		</StyledSearch>
	)
}

export default Search
