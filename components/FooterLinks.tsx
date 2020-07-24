import React from "react";
import Link from "next/link";
import HerokuLogo from "../public/logos/heroku.svg";
import "twin.macro";

const FooterLinks = () => {
  return (
    <div>
      <div>
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
      </div>
      <div tw="mt-3">
        <h3 tw="text-lg flex items-center">
          সৌজন্যে{" "}
          <a href="https://heroku.com" target="_blank">
            <HerokuLogo tw="w-20 inline-block ml-2" />
          </a>
        </h3>
      </div>
    </div>
  );
};

export default FooterLinks;
