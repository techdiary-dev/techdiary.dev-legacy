import React from 'react'
import LogoIcon from 'public/logos/logo-dark.svg'
import { LogoStyle } from './styles'
import Link from 'next/link'

const Logo: React.FC = () => {
	return (
		<LogoStyle>
			<Link href="/">
				<a>
					<LogoIcon />
				</a>
			</Link>
		</LogoStyle>
	)
}

export default Logo
