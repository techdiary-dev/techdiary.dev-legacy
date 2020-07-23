import React from "react";
import Navbar from "./Navbar";
import "twin.macro";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <div tw="container m-auto md:py-24 py-20 px-2 md:px-0">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
