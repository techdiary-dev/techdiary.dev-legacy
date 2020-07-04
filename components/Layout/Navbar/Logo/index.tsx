import React from "react";
import { LogoStyle } from "./styles";
import Link from "next/link";
import TDLogo from "../../../../public/logos/logo-dark.svg";

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
