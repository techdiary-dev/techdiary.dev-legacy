import React from "react";
import styled from "styled-components";
import Link from "next/link";
import tw from "twin.macro";
import TDLogo from "../../../public/logos/logo-dark.svg";

export const LogoStyle = styled.div`
  ${tw`h-full flex items-center`}

  @media all and (max-width: 800px) {
    svg {
      width: 30px;
      text {
        display: none;
      }
    }
  }
`;

const Logo: React.FC = () => {
  return (
    <LogoStyle>
      <Link href="/">
        <a>
          <TDLogo />
        </a>
      </Link>
    </LogoStyle>
  );
};

export default Logo;
