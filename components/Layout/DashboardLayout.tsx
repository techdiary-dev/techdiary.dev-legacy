import React from "react";
import { Row, Column } from "styled-grid-system-component";
import SidebarMenu from "components/Dashboard/SidebarMenu";
import PleaseLogin from "components/PleaseLogin";
import MainLayout from "./MainLayout";

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <PleaseLogin>
      <MainLayout>
        <Row>
          <Column md={3}>
            <SidebarMenu />
          </Column>
          <Column md={9}>{children}</Column>
        </Row>
      </MainLayout>
    </PleaseLogin>
  );
};

export default DashboardLayout;
