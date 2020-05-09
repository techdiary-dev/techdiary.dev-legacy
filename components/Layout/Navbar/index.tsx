import React from 'react'
import { StyledWrapper, StyledNavbarInner, UserAvaterModified } from './styles'
import Logo from './Logo'
import Search from './Search'

// import SettingsIcon from 'static/icons/settings.svg'
// import BookIcon from 'static/icons/book-open.svg'
// import PlusIcon from 'static/icons/plus.svg'
// import Link from 'next/link'
import Container from 'components/Container'

const Navbar: React.FC = () => {
	return (
		<StyledWrapper>
			<Container>
				<StyledNavbarInner>
					<Logo />
					<Search />
					<UserAvaterModified />
				</StyledNavbarInner>
			</Container>
		</StyledWrapper>
	)
}

export default Navbar
