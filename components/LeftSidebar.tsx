import React from "react";
import FeaturedTag from "./FeaturedTag";

const LeftSidebar = () => {
  return (
    <>
      <FeaturedTag primaryTag="php" />
      <FeaturedTag primaryTag="babeljs" tags={["babeljs", "php", "django"]} />
      <FeaturedTag primaryTag="babeljs" tags={["babeljs", "php", "django"]} />
      <FeaturedTag primaryTag="django" tags={["django", "nodejs"]} />
    </>
  );
};

export default LeftSidebar;

const x = {
  logo: "",
  featuredTags: [
    { primaryTag: "babeljs", tags: ["babeljs", "php", "django"], and: true },
    { primaryTag: "babeljs", tags: ["babeljs", "php", "django"] },
    { primaryTag: "babeljs", tags: ["babeljs", "php", "django"] },
  ],
};
