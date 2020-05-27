import styled from 'styled-components'
import screenSizes from 'styles/DEVICES'

export const StyledMainLayout = styled.section`
	main {
		margin: 10rem 0;
		@media all and (max-width: ${screenSizes.MOBILE_SCREEN}) {
			margin: 7rem 0;
		}
	}
`
