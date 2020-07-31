import React from "react";
import FeaturedTag from "./FeaturedTag";

const LeftSidebar = () => {
  return (
    <>
      <FeaturedTag primaryTag="js-array-challenge" limit={8}/>
      <FeaturedTag primaryTag="php" />
    </>
  );
};

export default LeftSidebar;
