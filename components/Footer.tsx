import React from "react";
import Link from "next/link";
import bnnum from "bnnum";
import HerokuLogo from "../public/logos/heroku.svg";
import "twin.macro";
import { AiFillBug } from "react-icons/ai";

const Footer = () => {
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
        <h3 tw="text-sm">
          <a
            href="https://github.com/techdiary-dev/Techdiary/issues/new/choose"
            target="_blank"
          >
            <AiFillBug tw="inline-block text-red-500" />{" "}
            <span tw="text-gray-600">Bug পেয়েছেন?</span>
          </a>
        </h3>
      </div>

      <div tw="mt-2">
        <a
          tw="flex"
          href="https://github.com/techdiary-dev/Techdiary/issues"
          target="_blank"
        >
          <img
            tw="mr-2"
            alt="GitHub issues"
            src="https://img.shields.io/github/issues/techdiary-dev/techdiary?color=%2324B3AE&style=flat-square"
          />
          <img
            alt="GitHub closed issues"
            src="https://img.shields.io/github/issues-closed/techdiary-dev/techdiary?color=%23e74c3c&style=flat-square"
          />
        </a>
      </div>

      <div tw="mt-3">
        <h3 tw="text-lg flex items-center">
          সৌজন্যে{" "}
          <a href="https://heroku.com" target="_blank">
            <HerokuLogo tw="w-20 inline-block ml-2" />
          </a>
        </h3>
      </div>

      <p tw="text-gray-500 mt-2">
        ভার্সন: {bnnum(process.env.NEXT_PUBLIC_VERSION)}
      </p>
    </div>
  );
};
export default Footer;
