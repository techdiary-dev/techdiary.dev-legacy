import React from 'react'
import { StyledWrapper, StyledNavbarInner } from './styles'
import Logo from './Logo'
import Search from './Search'

import Container from 'components/Container'
import Me from 'components/Me'
import UserAvater from 'components/UserAvater'
import { Logout } from './Logout'
import { SyncLoader } from 'react-spinners'
import Link from 'next/link'
import useMe from 'components/useMe'
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
