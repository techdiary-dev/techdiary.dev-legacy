import React from 'react'
import { StyledMainLayout } from './styles'
import Navbar from '../Navbar'
import Container from 'components/Container'
const MainLayout: React.FC = ({ children }) => {
	return (
		<StyledMainLayout>
			<Navbar />
			<main>
				<Container>{children}</Container>
			</main>
		</StyledMainLayout>
	)
}

export default MainLayout
