import styled from "styled-components";
import deviceScreens from "styles/DEVICES";
import tw from "twin.macro";

export const StyledSearch = styled.div`
  ${tw`w-full max-w-2xl text-center relative md:mx-12 mx-8`}

  input {
    ${tw`focus:bg-gray-200 transition duration-100`}
    ${tw`w-full rounded p-3 outline-none bg-gray-200 shadow-inner`}
  }

  .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    height: 20px;
    width: 20px;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.darkGrey};
  }
`;
