import styled from 'styled-components'

export const SidebarMenuStyles = styled.div``

export const SidebarMenuCardStyles = styled.div`
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.11);
	background: #fff;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 35px;

	.group-title {
		font-size: 1.5rem;
		line-height: 18px;
		margin-top: 5px;
		font-weight: 600;
		margin-bottom: 6px;
		margin-top: 0;
		color: ${({ theme }) => theme.darkGrey};
	}
`
export const MenuItem = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	margin-bottom: 5px;
	padding: 8px 0;

	.url {
		margin-left: 12px;
	}

	svg {
		width: 39px;
		height: 20px;
	}
`
