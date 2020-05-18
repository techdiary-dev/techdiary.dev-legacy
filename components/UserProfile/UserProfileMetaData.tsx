import React from 'react'
import { FiMapPin, FiBatteryCharging, FiExternalLink } from 'react-icons/fi'
import EducationIcon from 'public/icons/education.svg'
import { StyledUserMetaData } from './styles'
const UserProfileMetaData = () => {
	return (
		<StyledUserMetaData>
			<div className="infos">
				<div className="infos__info">
					<FiMapPin /> <span>উত্তরা সেক্টর ১০, ঢাকা</span>
				</div>
				<div className="infos__info">
					<EducationIcon /> <span>কম্পিউটার সাইন্স এন্ড ইঞ্জিনিয়ারিং</span>
				</div>
				<div className="infos__info">
					<FiBatteryCharging /> <span>সি++, পাইথন , জাভা</span>
				</div>
			</div>
			<div className="links">
				<h4 className="links__heading">আমার অন্যান্য লিংক সমূহ</h4>
				<div className="links__link">
					<FiExternalLink />
					<span>ব্যাক্তিগত ওয়েবসাইট</span>
				</div>
				<div className="links__link">
					<FiExternalLink />
					<span>ব্যাক্তিগত ওয়েবসাইট</span>
				</div>
				<div className="links__link">
					<FiExternalLink />
					<span>ব্যাক্তিগত ওয়েবসাইট</span>
				</div>
			</div>
		</StyledUserMetaData>
	)
}

export default UserProfileMetaData
