import React from 'react'

import { CardStyle, CardHeaderStyle } from './styles'

export const Card: React.FC = ({ children }) => {
	return <CardStyle>{children}</CardStyle>
}

export const CardHeader: React.FC = ({ children }) => {
	return <CardHeaderStyle>{children}</CardHeaderStyle>
}
