import React from 'react'
import {
	FiSettings,
	FiBookOpen,
	FiPlus,
	FiLogOut,
	FiGithub
} from 'react-icons/fi'
import Link from 'next/link'
import useMe from 'components/useMe'
import { SyncLoader } from 'react-spinners'
import { LOGOUT } from 'quries/AUTH'
// import nProgress from 'nprogress'
import { useMutation } from '@apollo/react-hooks'

import { StyledActions } from './styles'
import UserAvater from 'components/UserAvater'

const Actions: React.FC = () => {
	let { data, error, refetch, loading } = useMe()
	let [logout, { loading: loginLogout }] = useMutation(LOGOUT)

	// if (loading || loginLogout) nProgress.start()
	// else nProgress.done()

	const handleLogout = (e) => {
		logout().then(() => {
			refetch()
		})
	}

	if (loading) return <SyncLoader size={8} color="#24B3AE" />
	if (data && !error)
		return (
			<>
				<StyledActions>
					<Link href="/dashboard/update-profile">
						<FiSettings />
					</Link>
					<Link href="/dashboard">
						<FiBookOpen />
					</Link>
					<Link href="/new">
						<FiPlus />
					</Link>
					<FiLogOut onClick={handleLogout} />
				</StyledActions>
				<UserAvater
					name={data?.name}
					username={data?.username}
					profilePhoto={data?.profilePhoto}
				/>
			</>
		)
	else
		return (
			<StyledActions>
				<a
					className="login-url"
					href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI}`}
				>
					<FiGithub />
					যুক্ত হোন
				</a>
			</StyledActions>
		)
}

export default Actions
