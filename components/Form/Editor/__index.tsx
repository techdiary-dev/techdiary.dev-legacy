import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'reactjs-tab'

// import { UnControlled as CodeMirror } from 'react-codemirror2'
import marked from 'marked'
import {
	StyledEditorContainer,
	StyledEditor,
	StyledPreview,
	FormHelperTextStyles
} from './styles'

export interface Props {
	value: string
	name: string
	hasError?: boolean
	helperText?: string
	inputRef: React.LegacyRef<HTMLTextAreaElement>
	onChange: Function
}

const Editor: React.FC<Props> = ({
	value,
	name,
	inputRef,
	hasError = false,
	onChange,
	helperText
}: Props) => {
	return (
		<StyledEditorContainer>
			<Tabs>
				<Tab name="মার্কডাউন">
					<StyledEditor>
						<textarea
							name={name}
							rows={10}
							onChange={(e) => onChange(e.target.value)}
						>
							{value}
						</textarea>
					</StyledEditor>
				</Tab>
				<Tab name="প্রিভিউ">
					<StyledPreview>
						<article
							dangerouslySetInnerHTML={{ __html: marked(value || '') }}
						/>
					</StyledPreview>
				</Tab>
			</Tabs>
			<FormHelperTextStyles hasError={hasError}>
				{helperText}
			</FormHelperTextStyles>
		</StyledEditorContainer>
	)
}

export default Editor
