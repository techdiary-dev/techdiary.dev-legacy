import styled from 'styled-components'
import UserAvater from 'components/UserAvater'

export const StyledWrapper = styled.div`
	background-color: ${({ theme }) => theme.secondary};
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
	padding: 0 15px;

	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1;
`

export const StyledNavbarInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
`

export const UserAvaterModified = styled(UserAvater)`
	width: 2050px;
	/* justify-content: flex-end; */
	background-color: red;
`
