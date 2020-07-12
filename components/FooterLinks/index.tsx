import React from "react";
import { StyledFooterLinks } from "./styles";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <Link href="/p/privacy">
        <a>গোপনীয়তার নীতিমালা</a>
      </Link>

      <span className="seperator"> · </span>

      <Link href="/p/code-of-conduct">
        <a>আচরনবিধি</a>
      </Link>

      <span className="seperator"> · </span>

      <Link href="/p/about-us">
        <a>আমাদের সম্পর্কে</a>
      </Link>

      <span className="seperator"> · </span>

      <Link href="/p/contact">
        <a>যোগাযোগ</a>
      </Link>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
