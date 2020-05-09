import React from 'react'
import Link from 'next/link'
import LogoIcon from 'static/logos/logo-dark.svg'
import { LogoStyle } from './styles'

const Logo: React.FC = () => {
	return (
		<LogoStyle>
			<Link href="/">
				<LogoIcon />
			</Link>
		</LogoStyle>
	)
}

export default Logo
