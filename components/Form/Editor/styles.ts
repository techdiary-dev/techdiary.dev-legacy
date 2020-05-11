import styled from 'styled-components'

export const StyledEditorContainer = styled.div`
	.reactjs-tab {
		border-top: 0;
	}

	.tab-btn-navs {
		margin: 0;
		padding: 0;
		list-style: none;
		display: flex;
		border-bottom: 1px solid #ddd;
	}

	.tab-btn {
		border-radius: 5px 5px 0px 0px;
		padding: 5px 10px;
		border-bottom: 0;
		cursor: pointer;
		color: #888;
	}

	.tab-btn.active {
		border: 1px solid #ddd;
		border-radius: 5px 5px 0px 0px;
		border-bottom: 0;
		padding-bottom: 1px;
		background: #fff;
		margin-bottom: -1px;
		box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.09);
		color: #000;
	}

	.tab-content {
		background-color: #fff;
		box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.09);
	}
`
export const StyledEditor = styled.div`
	.CodeMirror {
		font-size: 16px;
		/* height: calc(100vh - 200px); */
		height: 100%;
	}
`

export const StyledPreview = styled.article`
	width: 100%;
	background: #fff;
	padding: 15px;
	border-radius: 5px;
`

export const StyledEditorModeSwitcher = styled.div``
export const StyledButton = styled.button``
