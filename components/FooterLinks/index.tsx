import React from "react";
import { StyledFooterLinks } from "./styles";
import Link from "next/link";

const FooterLinks = () => {
  return (
    <StyledFooterLinks>
      <Link href={`/p/[slug]`} as="/p/code-of-conduct">
        <a>আচরনবিধি</a>
      </Link>
      <span className="seperator"> · </span>
      <Link href={`/p/[slug]`} as="/p/terms-of-use">
        <a>ব্যাবহার এর নীতিমালা</a>
      </Link>
      <span className="seperator"> · </span> <br />
      <Link href={`/p/[slug]`} as="/p/releases">
        <a>রিলিজ সমূহ</a>
      </Link>
    </StyledFooterLinks>
  );
};

export default FooterLinks;
