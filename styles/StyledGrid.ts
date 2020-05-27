import styled from 'styled-components'
import { Row, Column } from 'styled-grid-system-component'
import ssize from 'styles/DEVICES'

export const StyledCol = styled(Column)<{ sidebar: boolean; main: boolean }>`
	@media all and (max-width: ${ssize.MOBILE_SCREEN}) {
		padding-left: 0;
		padding-right: 0;
		display: ${(props) => props.sidebar && 'none'};
	}
`
