import React from 'react'
import { StyledWrapper, StyledNavbarInner } from './styles'
import Logo from './Logo'
import Search from './Search'

// import SettingsIcon from 'public/icons/settings.svg'
// import BookIcon from 'public/icons/book-open.svg'
// import PlusIcon from 'public/icons/plus.svg'
// import Link from 'next/link'
import Container from 'components/Container'
import Me from 'components/Me'
import UserAvater from 'components/UserAvater'
import { Logout } from './Logout'
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
						<a
							href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI}`}
						>
							Login
						</a>
					)}
				</StyledNavbarInner>
			</Container>
		</StyledWrapper>
	)
}

export default Navbar
