import React from "react";
import Navbar from "./Navbar";
import Container from "components/Container";
import "twin.macro";

const MainLayout: React.FC = ({ children }) => {
  return (
    <main tw="md:py-24 py-20">
      <Navbar />
      <Container>{children}</Container>
    </main>
  );
};

export default MainLayout;
