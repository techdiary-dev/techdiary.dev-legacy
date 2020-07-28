import React from "react";
import Link from "next/link";
import HerokuLogo from "../public/logos/heroku.svg";
import "twin.macro";

const FooterLinks = () => {
  return (
    <div>
      <div>
        <Link href={`/p/[slug]`} as="/p/about" passHref>
          <a tw="text-sm text-gray-600">আমাদের সম্পর্কে</a>
        </Link>
        <span className="seperator"> · </span>
        <Link href={`/p/[slug]`} as="/p/code-of-conduct" passHref>
          <a tw="text-sm text-gray-600">আচরনবিধি</a>
        </Link>
        <span className="seperator"> · </span>
        <Link href={`/p/[slug]`} as="/p/releases" passHref>
          <a tw="text-sm text-gray-600">রিলিজ সমূহ</a>
        </Link>
        <span className="seperator"> · </span> <br />
        <Link href={`/p/[slug]`} as="/p/terms-of-use" passHref>
          <a tw="text-sm text-gray-600">ব্যবহার এর নীতিমালা</a>
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

  <p tw="text-gray-500 mt-2">{process.env.NEXT_PUBLIC_VERSION}</p>
    </div>
  );
};
// d
export default FooterLinks;
