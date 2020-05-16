import React from 'react'
import { SidebarMenuCardStyles, MenuItem, SidebarMenuStyles } from './styles'
import PencilIcon1 from 'static/icons/edit-2.svg'
import PausedIcon from 'static/icons/pause-circle.svg'
import BookIcon from 'static/icons/book-open.svg'
import SettingsIcon from 'static/icons/settings.svg'
import Link from 'next/link'

const SidebarMenu: React.FC = () => {
	return (
		<SidebarMenuStyles>
			<SidebarMenuCardStyles>
				<h3 className="group-title">আমার ডায়েরি</h3>
				<MenuItem>
					<BookIcon />
					<Link href="/dashboard">
						<a className="url">সকল ডায়েরি</a>
					</Link>
				</MenuItem>
				<MenuItem>
					<PencilIcon1 />
					<Link href="/new">
						<a className="url">নতুন ডায়েরি</a>
					</Link>
				</MenuItem>
				<MenuItem>
					<BookIcon />
					<Link href="/dashboard/published">
						<a className="url">প্রকাশিত ডায়েরি</a>
					</Link>
				</MenuItem>
				<MenuItem>
					<PausedIcon />
					<Link href="/dashboard/draft">
						<a className="url">খসড়া ডায়েরি</a>
					</Link>
				</MenuItem>
			</SidebarMenuCardStyles>

			<SidebarMenuCardStyles>
				<h3 className="group-title">সেটিং</h3>
				<MenuItem>
					<SettingsIcon />
					<Link href="/dashboard/update-profile">
						<a className="url">প্রোফাইল হালনাগাদ</a>
					</Link>
				</MenuItem>
			</SidebarMenuCardStyles>
		</SidebarMenuStyles>
	)
}

export default SidebarMenu
