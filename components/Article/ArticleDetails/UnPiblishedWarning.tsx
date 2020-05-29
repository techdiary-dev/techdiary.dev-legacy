import React from 'react'
import styled from 'styled-components'
import DEVICES from 'styles/DEVICES'
const StyledWarning = styled.div`
	background-color: ${({ theme }) => theme.secondaryDark};
	padding: 15px;
	border-radius: 5px;

	color: red;

	@media all and (max-width: ${DEVICES.MOBILE_SCREEN}) {
		h3 {
			font-size: 2rem;
			line-height: 3.5rem;
		}
	}

	p {
		font-size: 2rem;
		margin-top: 0;
		margin-bottom: 0;
	}
`

const UnPiblishedWarning = () => {
	return (
		<StyledWarning>
			<h3>
				অপ্রকাশিত ডায়েরি, তবে আপনি চাইলে URL এর মাধ্যমে যে কাউকে দেখাতে পারবেন।
			</h3>
			<p>অপ্রকাশিত ডায়েরি প্রথম পাতায় দেখানো হবে না।</p>
		</StyledWarning>
	)
}

export default UnPiblishedWarning
