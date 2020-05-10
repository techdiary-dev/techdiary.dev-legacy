import React, { FC } from 'react'

import { StyledUserAvater } from './styles'

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
				<div className="name">{name}</div>
				<div className="username">u/{username}</div>
			</div>
		</StyledUserAvater>
	)
}

export default UserAvater
