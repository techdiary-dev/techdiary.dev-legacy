import React from "react";
import FeaturedTag from "./FeaturedTag";

const LeftSidebar = () => {
  return (
    <>
      <FeaturedTag
        primaryTag="js-array-challenge"
        tags={["js-array-challenge", "challenge"]}
      />
      <FeaturedTag primaryTag="php" />
    </>
  );
};

export default LeftSidebar;
