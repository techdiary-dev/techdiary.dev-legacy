import React from 'react'
import { LogoStyle } from './styles'
import Link from 'next/link'

const Logo: React.FC = () => {
	return (
		<LogoStyle>
			<Link href="/">
				<a>
					<img src="/logos/logo.png" alt="Techdiary.dev logo" />
				</a>
			</Link>
		</LogoStyle>
	)
}

export default Logo
