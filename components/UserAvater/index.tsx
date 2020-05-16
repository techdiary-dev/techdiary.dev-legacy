import React, { FC } from 'react'

import { StyledUserAvater } from './styles'
import Link from 'next/link'

interface Props {
	name?: string
	username?: string
	profilePhoto?: string
}

const UserAvater: FC<Props> = ({ name, username, profilePhoto }: Props) => {
	return (
		<StyledUserAvater>
			<img className="avater" src={profilePhoto} alt={name} />
			<div className="info">
				<div className="name">
					<Link href="/[username]" as={`/${username}`}>
						<a>{name}</a>
					</Link>
				</div>
				<div className="username">
					<Link href="/[username]" as={`/${username}`}>
						<a>{username}</a>
					</Link>
				</div>
			</div>
		</StyledUserAvater>
	)
}

export default UserAvater
