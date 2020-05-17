import React from 'react'
import { BarLoader } from 'react-spinners'

import { Container } from './styles'

const FullPageLoader: React.FC = () => {
	return (
		<Container>
			<BarLoader color="#24B3AE" />
		</Container>
	)
}

export default FullPageLoader
