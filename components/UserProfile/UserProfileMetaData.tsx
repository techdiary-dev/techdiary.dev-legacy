import React from 'react'
import {
	FiMapPin,
	FiBatteryCharging,
	FiExternalLink,
	FiGithub
} from 'react-icons/fi'
import { GoMortarBoard } from 'react-icons/go'
// import EducationIcon from 'public/icons/education.svg'
import { StyledUserMetaData } from './styles'

interface Props {
	user: any
}

const UserProfileMetaData = ({ user }: Props) => {
	return (
		<StyledUserMetaData>
			<div className="infos">
				{user?.username && (
					<div className="infos__info">
						<FiGithub />
						<span>
							<a
								href={`https://www.github.com/${user?.username}`}
								target="_blank"
							>
								{user?.username}
							</a>
						</span>
					</div>
				)}
				{user?.location && (
					<div className="infos__info">
						<FiMapPin /> <span>{user?.location}</span>
					</div>
				)}
				{user?.education && (
					<div className="infos__info">
						<GoMortarBoard /> <span>{user?.education}</span>
					</div>
				)}

				{user?.skills.length ? (
					<div className="infos__info">
						<FiBatteryCharging /> <span>{user?.skills.join(', ')}</span>
					</div>
				) : (
					''
				)}
			</div>
			{user?.links.length ? (
				<div className="links">
					<h4 className="links__heading">আমার অন্যান্য লিংক সমূহ</h4>
					{user?.links.map((link, key) => (
						<div className="links__link" key={key}>
							<FiExternalLink />
							<span>
								<a href={link?.link} target="_blank">
									{link?.text}
								</a>
							</span>
						</div>
					))}
				</div>
			) : (
				''
			)}
		</StyledUserMetaData>
	)
}

export default UserProfileMetaData
