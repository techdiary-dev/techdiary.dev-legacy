import styled from 'styled-components'

export const StyledPhotoUpdater = styled.div`
	text-align: center;
	margin: 25px 0;

	.photo-preview {
		margin: auto;
		background-color: #ddd;
		height: 85px;
		width: 85px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15px;
		overflow: hidden;
		cursor: pointer;
		img {
			max-width: 100%;
			height: auto;
		}
	}

	.label {
		font-size: 1.8rem;
	}
`
