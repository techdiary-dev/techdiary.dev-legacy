import styled from "styled-components";
import tw from "twin.macro";

interface InputType {
  hasError: Boolean;
  ref: any;
}

export const FormGroupStyles = styled.div`
  margin: 0 0 1.8rem;
  position: relative;
`;

// export const StyledButton = styled.button(
// 	({ color, size }: ButtonStyleProps) => [
// 		tw`p-2 rounded text-semiDark shadow hover:bg-opacity-75 border-transparent transition duration-300 focus:outline-none`,
// 		// Color themes
// 		color === "primary" && tw`bg-primary`,
// 		color === "secondary" && tw`bg-secondaryDark`,
// 		color === "danger" && tw`bg-red-500 text-white`,
// 		color === "warning" && tw`bg-yellow-500`,
// 		color === "link" && tw`p-0 shadow-none text-primary`,
// 		color === "dark" && tw`bg-dark text-white`,

// 		// Sizes
// 		size === "small" && tw`p-1`,
// 		size === "normal" && tw`p-2`,
// 		size === "large" && tw`p-3`,
// 	]
// );

export const FormLabelStyles = styled.label`
  ${tw`font-bold w-full block mb-2`}
`;

export const FormInputStyles = styled.input(({ hasError, ref }: InputType) => [
  tw`border w-full px-4 py-2 rounded text-base focus:outline-none focus:border-gray-400 border-2 border-gray-300 focus:border-2 transition duration-300`,
  hasError && tw`border-red-300 focus:border-red-300`,
]);

export const FormTextareaStyles = styled.textarea(
  ({ hasError, ref }: InputType) => [
    tw`border w-full px-4 py-2 rounded text-base focus:outline-none focus:border-gray-400 border-2 border-gray-300 focus:border-2 transition duration-300`,
    hasError && tw`border-red-300 focus:border-red-300`,
  ]
);

export const FormHelperTextStyles = styled.span(
  ({ hasError }: { hasError: boolean }) => [
    tw`text-sm text-gray-600`,
    hasError && tw`text-red-500`,
  ]
);
