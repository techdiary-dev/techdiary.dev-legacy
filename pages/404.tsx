import React from "react";
import MainLayout from "components/Layout/MainLayout";

import { Row, Col } from "styles/StyledGrid";
import styled from "styled-components";
import HeadTag from "components/HeadTag";
import deviceSides from "styles/DEVICES";

const StyledNotFoundPage = styled.div`
  .code {
    font-size: 2.6rem;
    @media all and (max-width: ${deviceSides.MOBILE_SCREEN}) {
      font-size: 1.8rem;
      margin: auto;
    }
  }

  .laptop {
    @media all and (max-width: ${deviceSides.MOBILE_SCREEN}) {
      width: 300px;
    }
  }
`;

const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <HeadTag title="404" />
      <MainLayout>
        <Row className="flex-center">
          <Col md={4} className="text-center">
            <img
              className="laptop"
              src="/images/sadface.gif"
              alt="very sad face :'("
            />
          </Col>
          <Col md={8}>
            <pre className="code">
              {`{
  status: 404 , 
  message: “পাতাটি খুঁজে পাওয়া যাচ্ছে না”
}`}
            </pre>
          </Col>
        </Row>
      </MainLayout>
    </StyledNotFoundPage>
  );
};

export default NotFoundPage;
