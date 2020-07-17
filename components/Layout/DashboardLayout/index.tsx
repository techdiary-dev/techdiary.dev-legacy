import React from "react";
import { Row, Column } from "styled-grid-system-component";
import { DashboardLayoutStyles } from "./styles";
import MainLayout from "../MainLayout";
import SidebarMenu from "components/Dashboard/SidebarMenu";
import PleaseLogin from "components/PleaseLogin";
import useMe from "components/useMe";
import styled from "styled-components";

let StyledServerError = styled.div`
  width: 95%;
  max-width: 1200px;
  text-align: center;
  margin: 25px auto;
  pre {
    font-size: 18px;
    overflow: scroll;
    text-align: left;
    background-color: #000000d6;
    border-radius: 5px;
    color: #fff;
    max-height: 400px;
  }
`;

const DashboardLayout: React.FC = ({ children }) => {
  const { error } = useMe();

  if (error)
    return (
      <StyledServerError>
        <h1>ওহ! অভ্যন্তরীণ সার্ভারে সমস্যা</h1>
        <h2>NODE_ENV: {process.env.NODE_ENV}</h2>
        {process.env.NODE_ENV !== "production" && (
          <>
            <h3>
              ভুল: <mark>{error?.message}</mark>
            </h3>
            <pre>{JSON.stringify(error, undefined, 4)}</pre>
          </>
        )}
      </StyledServerError>
    );

  return (
    <PleaseLogin>
      <MainLayout>
        <DashboardLayoutStyles>
          <Row>
            <Column md={3}>
              <SidebarMenu />
            </Column>
            <Column md={9}>{children}</Column>
          </Row>
        </DashboardLayoutStyles>
      </MainLayout>
    </PleaseLogin>
  );
};

export default DashboardLayout;
