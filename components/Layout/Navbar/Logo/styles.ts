import styled from 'styled-components'

export const LogoStyle = styled.div`
	display: flex;
	justify-content: center;
	cursor: pointer;

	@media all and (max-width: 800px) {
		width: 30px;
		svg {
			text {
				display: none;
			}
		}
	}
`
