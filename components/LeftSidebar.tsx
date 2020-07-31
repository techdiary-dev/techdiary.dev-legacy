import React from "react";
import FeaturedTag from "./FeaturedTag";

const LeftSidebar = () => {
  return (
    <>
      <FeaturedTag
        primaryTag="babeljs"
        tags={["js-array-challenge", "challenge"]}
        and
      />
      <FeaturedTag primaryTag="php" />
    </>
  );
};

export default LeftSidebar;
