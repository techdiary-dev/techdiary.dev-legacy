import React, { FC } from 'react'

import { ButtonStyles } from './styles'

export type ButtonSize = 'round' | 'sm' | 'lg'

interface Props {
	onClick?: React.FormEventHandler<HTMLButtonElement>
	children: JSX.Element | string
	size?: ButtonSize
	type?: 'button' | 'submit'
}

const Button: FC<Props> = ({
	onClick,
	children,
	type = 'button',
	size
}: // size = ButtonSize.normal
Props): JSX.Element => {
	return (
		<ButtonStyles type={type} onClick={onClick} size={size}>
			{children}
		</ButtonStyles>
	)
}

export default Button
