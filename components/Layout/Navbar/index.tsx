import React from 'react'
import { StyledWrapper, StyledNavbarInner } from './styles'
import Logo from './Logo'
import Search from './Search'
import Container from 'components/Container'
import Actions from './Actions'

const Navbar = () => {
	return (
		<StyledWrapper>
			<Container>
				<StyledNavbarInner>
					<Logo />
					<Search />
					<Actions />
				</StyledNavbarInner>
			</Container>
		</StyledWrapper>
	)
}

export default Navbar
