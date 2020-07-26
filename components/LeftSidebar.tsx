import React from "react";
import FeaturedTag from "./FeaturedTag";

const LeftSidebar = () => {
  return (
    <>
      <FeaturedTag primaryTag="php" and />
      <FeaturedTag primaryTag="babeljs" tags={["babeljs", "php", "django"]} />
    </>
  );
};

export default LeftSidebar;
