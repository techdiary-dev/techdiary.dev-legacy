import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { MdKeyboardBackspace } from "react-icons/md";
import { Row, Col } from "styles/StyledGrid";
import styled from "styled-components";
import HeadTag from "components/HeadTag";
import deviceSides from "styles/DEVICES";
import tw from "twin.macro";
import Link from "next/link";

const StyledNotFoundPage = styled.div`
  .code {
    ${tw`text-2xl`}
    @media all and (max-width: ${deviceSides.MOBILE_SCREEN}) {
      ${tw`text-base`}
      margin: auto;
    }
  }

  .laptop {
    @media all and (max-width: ${deviceSides.MOBILE_SCREEN}) {
      width: 300px;
    }
  }
`;

const NotFoundPage = ({ statusCode }) => {
  return (
    <StyledNotFoundPage>
      <HeadTag title={statusCode} />
      <MainLayout>
        <Row tw="flex items-center">
          <Col md={4}>
            <img
              className="laptop"
              src="/images/sadface.gif"
              alt="very sad face :'("
            />
          </Col>
          <Col md={8}>
            <pre className="code">
              {`{
  status: ${statusCode} , 
  message: “পাতাটি খুঁজে পাওয়া যাচ্ছে না”
}`}
            </pre>
          </Col>
          <Col md={12} tw="text-center">
            <Link href="/">
              <a tw="text-sm sm:text-lg inline-block justify-center cursor-pointer ">
                <span tw="bg-gray-400 flex items-center px-4 py-2 rounded text-gray-700 hover:shadow-xl transition duration-300">
                  <MdKeyboardBackspace tw="mr-2" />
                  চলুন ফিরে যাই
                </span>
              </a>
            </Link>
          </Col>
        </Row>
      </MainLayout>
    </StyledNotFoundPage>
  );
};

NotFoundPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default NotFoundPage;
