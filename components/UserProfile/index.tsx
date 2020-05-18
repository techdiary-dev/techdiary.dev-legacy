import React from 'react'
import { Row } from 'styled-grid-system-component'
import { StyledUserprofile, StyledCol } from './styles'
import ArticleCard from 'components/Article/ArticleCard'
import UserProfileData from './UserProfileData'
import UserProfileMetaData from './UserProfileMetaData'

interface Props {
	user: any
}

const UserProfile = ({ user }: Props) => {
	return (
		<StyledUserprofile>
			<UserProfileData user={user} />

			<div className="body">
				<Row>
					<StyledCol md={3} sidebar>
						<UserProfileMetaData user={user} />
					</StyledCol>

					<StyledCol md={6} main>
						{user?.articles?.map((article) => (
							<ArticleCard {...article} key={article._id} />
						))}
					</StyledCol>

					<StyledCol md={3} sidebar></StyledCol>
				</Row>
			</div>
		</StyledUserprofile>
	)
}

export default UserProfile
