import React, { FC } from 'react'

import { ButtonStyles } from './styles'

export enum ButtonSize {
	normal,
	medium,
	large
}

interface Props {
	onClick?: React.FormEventHandler<HTMLButtonElement>
	children: JSX.Element | string
	// size?: ButtonSize
}

const Button: FC<Props> = ({ onClick, children }: Props): JSX.Element => {
	return (
		<ButtonStyles type="submit" onClick={onClick}>
			{children}
		</ButtonStyles>
	)
}

export default Button
