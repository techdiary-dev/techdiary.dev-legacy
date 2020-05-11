import React, { useState, useEffect } from 'react'
import { Tabs, Tab } from 'reactjs-tab'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import marked from 'marked'
import {
	StyledEditorContainer,
	StyledEditor
	// StyledPreview,
	// StyledEditorModeSwitcher,
	// StyledButton
} from './styles'

interface Props {
	value: string
	onChange: Function
}

const Editor: React.FC<Props> = ({ value, onChange }: Props) => {
	return (
		<StyledEditorContainer>
			<Tabs>
				<Tab name="মার্কডাউন">
					<StyledEditor>
						<CodeMirror
							value={value}
							options={{
								mode: 'markdown',
								lineNumbers: true
							}}
							onChange={(editor, data, value) => {
								onChange(value)
							}}
						/>
					</StyledEditor>
				</Tab>
				<Tab name="প্রিভিউ">
					<article dangerouslySetInnerHTML={{ __html: marked(value ?? '') }} />
				</Tab>
			</Tabs>
		</StyledEditorContainer>
	)
}

export default Editor
