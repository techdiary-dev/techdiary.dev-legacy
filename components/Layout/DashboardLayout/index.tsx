import React from 'react'
import { Row, Column } from 'styled-grid-system-component'
import { DashboardLayoutStyles } from './styles'
import MainLayout from '../MainLayout'
import SidebarMenu from 'components/Dashboard/SidebarMenu'
import PleaseLogin from 'components/PleaseLogin'

const DashboardLayout: React.FC = ({ children }) => {
	return (
		<PleaseLogin>
			<MainLayout>
				<DashboardLayoutStyles>
					<Row>
						<Column md={3}>
							<SidebarMenu />
						</Column>
						<Column md={9}>{children}</Column>
					</Row>
				</DashboardLayoutStyles>
			</MainLayout>
		</PleaseLogin>
	)
}

export default DashboardLayout
