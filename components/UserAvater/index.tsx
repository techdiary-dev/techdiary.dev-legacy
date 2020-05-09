import React from 'react'

import { StyledUserAvater } from './styles'

const UserAvater: React.FC = () => {
	return (
		<StyledUserAvater>
			<img
				className="avater"
				src="https://randomuser.me/api/portraits/men/32.jpg"
				alt="profile-photo"
			/>
			<div className="info">
				<div className="name">Shoaib sharif</div>
				<div className="username">u/john_mia</div>
			</div>
		</StyledUserAvater>
	)
}

export default UserAvater
