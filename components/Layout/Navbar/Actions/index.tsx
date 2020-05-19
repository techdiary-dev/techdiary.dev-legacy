import React from 'react'
import 'react-tooltip'
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
import ReactTooltip from 'react-tooltip'

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
						<a data-tip data-for="settings">
							<FiSettings />
						</a>
					</Link>
					<Link href="/dashboard">
						<a data-tip data-for="dashboard">
							<FiBookOpen />
						</a>
					</Link>
					<Link href="/new">
						<a data-tip data-for="new">
							<FiPlus />
						</a>
					</Link>
					<FiLogOut data-tip data-for="logout" onClick={handleLogout} />
				</StyledActions>
				<UserAvater
					name={data?.name}
					username={data?.username}
					profilePhoto={data?.profilePhoto}
				/>
				<ReactTooltip id="logout" aria-haspopup="true">
					লগআউট
				</ReactTooltip>
				<ReactTooltip id="dashboard" aria-haspopup="true">
					আপনার ড্যাসবোর্ড
				</ReactTooltip>
				<ReactTooltip id="settings" aria-haspopup="true">
					আপনার প্রোফাইল হালনাগাদ করুন
				</ReactTooltip>
				<ReactTooltip id="new" aria-haspopup="true">
					নতুন ডায়েরি লিখুন
				</ReactTooltip>
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
