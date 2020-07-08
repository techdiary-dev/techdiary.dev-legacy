import React from "react";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
import MainLayout from "components/Layout/MainLayout";

import { Row } from "styled-grid-system-component";
import { StyledCol } from "styles/StyledGrid";
import { Card } from "components/Card";

const StaticPage = () => {
  return (
    <MainLayout>
      <Row>
        <StyledCol md={9}>
          <Card>
            <h1>Releases</h1>
          </Card>
        </StyledCol>
      </Row>
    </MainLayout>
  );
};

export default StaticPage;
