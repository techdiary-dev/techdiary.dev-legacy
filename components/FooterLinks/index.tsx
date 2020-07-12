import React from "react";
import { StyledFooterLinks } from "./styles";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <span className="seperator"> · </span>

      <Link href={`/p/[slug]`} as="/p/code-of-conduct">
        <a>আচরনবিধি</a>
      </Link>

      <span className="seperator"> · </span>

      <Link href={`/p/[slug]`} as="/p/about-us">
        <a>আমাদের সম্পর্কে</a>
      </Link>

      <span className="seperator"> · </span>

      <Link href={`/p/[slug]`} as="/p/contact">
        <a>যোগাযোগ</a>
      </Link>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
