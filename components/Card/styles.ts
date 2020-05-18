import styled from 'styled-components'

export const CardStyle = styled.div`
	background-color: #fff;
	padding: 15px;
	box-shadow: 0 0 5px rgba(47, 52, 50, 0.15);
	border-radius: 5px;
	margin-bottom: 25px;
`

export const CardHeaderStyle = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
	margin-top: -5px;
	color: ${({ theme }) => theme.semiDark};
`
