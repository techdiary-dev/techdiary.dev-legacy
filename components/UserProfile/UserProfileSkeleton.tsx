import React from 'react'
import { Row } from 'styled-grid-system-component'
import Skeleton from 'react-loading-skeleton'
import {
	StyledUserprofile,
	StyledUserProfileData,
	StyledCol,
	StyledUserMetaData
} from './styles'
import { FiGithub, FiMapPin } from 'react-icons/fi'
import EducationIcon from 'public/icons/education.svg'

const UserProfileSekeleton = () => {
	return (
		<StyledUserprofile>
			<StyledUserProfileData>
				<Skeleton circle={true} height={155} width={155} />

				<div className="user-profile-data">
					<h2 className="user-profile-data__name">
						<Skeleton height={15} width="50%" />
					</h2>
					<p className="user-profile-data__username">
						<Skeleton height={12} width="100%" />
					</p>
					<p className="user-profile-data__bio">
						<Skeleton count={5} height={4} />
					</p>
				</div>
			</StyledUserProfileData>

			<Row>
				<StyledCol md={3} sidebar>
					<Skeleton height={15} />
					<div style={{ height: 5 }} />
					<Skeleton height={15} />
					<div style={{ height: 5 }} />
					<Skeleton height={15} />
					<div style={{ height: 25 }} />
					<Skeleton height={15} />
					<div style={{ height: 5 }} />
					<Skeleton height={15} />
					<div style={{ height: 5 }} />
					<Skeleton height={15} />
				</StyledCol>

				<StyledCol md={6} main>
					<Skeleton height={250} />
					<div style={{ height: 15 }} />
					<Skeleton height={250} />
				</StyledCol>

				<StyledCol md={3} sidebar></StyledCol>
			</Row>
		</StyledUserprofile>
	)
}

export default UserProfileSekeleton
