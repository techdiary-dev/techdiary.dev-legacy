import styled from 'styled-components'
import { Row, Column } from 'styled-grid-system-component'

export const StyledHomePage = styled.div``

export const StyledCol = styled(Column)<{ sidebar: boolean; main: boolean }>`
	@media all and (max-width: 800px) {
		padding-left: 0;
		padding-right: 0;
		position: ${(props) => props.sidebar && 'sticky'};

		display: ${(props) => props.sidebar && 'none'};
	}
`
