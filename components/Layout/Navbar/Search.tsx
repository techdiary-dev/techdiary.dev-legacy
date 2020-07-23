import React from "react";
import Typed from "react-typed";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import tw from "twin.macro";

export const StyledSearch = styled.div`
  ${tw`w-full max-w-2xl text-center relative md:mx-12 mx-3`}

  input {
    ${tw`transition duration-100`}
    ${tw`w-full rounded p-3 outline-none bg-offWhite`}
    box-shadow: inset 0px 0px 2px 2px rgb(0 0 0 / 6%);
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

const Search: React.FC = () => {
  return (
    <StyledSearch>
      <Typed
        strings={["টাইপ করুন...", "সমাধান পান...", "নিজের মাতৃভাষায়..."]}
        typeSpeed={60}
        backSpeed={60}
        attr="placeholder"
        loop
      >
        <input type="text" />
      </Typed>
      <FiSearch className="search-icon" />
    </StyledSearch>
  );
};

export default Search;
