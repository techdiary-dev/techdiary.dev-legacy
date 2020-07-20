import styled from "styled-components";
import tw from "twin.macro";

export const StyledUserCardWithArticles = styled.div`
	.heading {
		/* color: ${({ theme }) => theme.primaryDark};
		font-size: 1.4rem;
		margin-top: 18px; */
		${tw`text-lg mt-2 text-primary`}
	}

	.link {
		color: ${({ theme }) => theme.primaryDark};
		${tw`font-bold text-base`}
	}
	.articles {
	}
	.article {
		${tw`mt-4`}
		&__title {
			${tw`text-base text-semiDark`}
		}
		&__time {
			${tw`text-sm text-gray-700`}
		}
	}
`;
