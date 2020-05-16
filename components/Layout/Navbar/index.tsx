import React from 'react'
import { StyledWrapper, StyledNavbarInner } from './styles'
import Logo from './Logo'
import Search from './Search'

// import SettingsIcon from 'static/icons/settings.svg'
// import BookIcon from 'static/icons/book-open.svg'
// import PlusIcon from 'static/icons/plus.svg'
// import Link from 'next/link'
import Container from 'components/Container'
import Me from 'components/Me'
import UserAvater from 'components/UserAvater'
import { Logout } from './Logout'
import Login from 'components/Login'
import { SyncLoader } from 'react-spinners'
import Link from 'next/link'
import useMe from 'components/useMe'

const Navbar = () => {
	let { data, error, refetch, loading } = useMe()

	return (
		<StyledWrapper>
			<Container>
				<StyledNavbarInner>
					<Logo />
					<Search />
					{loading ? (
						<SyncLoader size={8} color="#24B3AE" />
					) : data && !error ? (
						<>
							<Link href="/new">
								<a>New</a>
							</Link>
							<Link href="/dashboard">
								<a>Dashboard</a>
							</Link>
							<UserAvater
								name={data?.name}
								username={data?.username}
								profilePhoto={data?.profilePhoto}
							/>
							<Logout refetchMe={refetch} />
						</>
					) : (
						<a href="https://github.com/login/oauth/authorize?client_id=2701778b22c45bf2cc9f&redirect_uri=http://localhost:3000/oauth_callback">
							Login
						</a>
					)}
				</StyledNavbarInner>
			</Container>
		</StyledWrapper>
	)
}

export default Navbar
