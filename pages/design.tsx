import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { Col, Row } from "styles/StyledGrid";
import styled from "styled-components";
import { Danger, Warning, Message } from "components/Alert";
import { Card, CardHeader } from "components/Card";
import Button from "components/Button";
import { InfoCard } from "components/InfoCard";
import "twin.macro";

const StyledBox = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.primary};
  margin: 15px 0;
`;

const Box = () => {
  return <StyledBox />;
};

const Grid = () => (
  <>
    <Row>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
      <Col>
        <Box />
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <Box />
      </Col>
      <Col md={8}>
        <Box />
      </Col>
    </Row>
    <Row>
      <Col md={8}>
        <Box />
      </Col>
      <Col md={4}>
        <Box />
      </Col>
    </Row>
  </>
);

const AlertsSection = () => {
  return (
    <div>
      <h3 tw="text-xl">এলার্ট কম্পোনেন্ট সমূহ </h3>
      <div style={{ margin: "15px 0" }}>
        <Danger>এটি একটি বিপদজনক বার্তা</Danger>
      </div>
      <div style={{ margin: "15px 0" }}>
        <Warning>এটি একটি সতর্ক বার্তা ⚠️</Warning>
      </div>
      <div style={{ margin: "15px 0" }}>
        <Message>এটি একটি সাধারণ প্রাইমারি মেসেজ</Message>
      </div>

      <div style={{ margin: "15px 0" }}>
        <Message dismissable={false}>
          এই বার্তাটি আপনি মুছতে পারবেন না জীবনেও  😂
        </Message>
      </div>
    </div>
  );
};

const Headings = () => (
  <>
    <h3>হেডিং সমূহ</h3>
    <div style={{ margin: "15px 0" }}>
      <h1>H1: 2.25rem</h1>
      <h2>H2: 1.875rem</h2>
      <h3>H3: 1.5rem</h3>
      <h4>H4: 1.5rem</h4>
      <h5>H5: 1.125rem</h5>
      <h6>H6: 1rem</h6>
    </div>
  </>
);

const CardComponents = () => (
  <Row>
    <Col>
      <Card>
        <CardHeader>Card 1</CardHeader>
        <p>
          অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক
          কিছু। যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে।
          নিজের ভাষায় লেখা দেখতে অভ্যস্ত হও। মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি
          তাকে অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি তাতে অর্থ
          ঢালো।
        </p>
      </Card>
    </Col>
    <Col>
      <Card>
        <CardHeader>Card 3</CardHeader>
        <p>
          অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক
          কিছু। যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে।
          নিজের ভাষায় লেখা দেখতে অভ্যস্ত হও। মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি
          তাকে অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি তাতে অর্থ
          ঢালো।
        </p>
      </Card>
    </Col>
  </Row>
);

const Buttons = () => (
  <div tw="grid grid-cols-6 my-16">
    <div>
      <Button tw="mb-3" size="small" color="primary">
        Primary Small
      </Button>

      <Button tw="mb-3" size="normal" color="primary">
        Primary normal
      </Button>

      <Button tw="mb-3" size="large" color="primary">
        Primary Large
      </Button>
    </div>

    <div>
      <Button tw="mb-3" size="small" color="secondary">
        Secondary Small
      </Button>
      <Button tw="mb-3" size="normal" color="secondary">
        Secondary normal
      </Button>
      <Button tw="mb-3" size="large" color="secondary">
        Secondary Large
      </Button>
    </div>

    <div>
      <Button tw="mb-3" size="small" color="danger">
        Danger Small
      </Button>
      <Button tw="mb-3" size="normal" color="danger">
        Danger normal
      </Button>
      <Button tw="mb-3" size="large" color="danger">
        Danger Large
      </Button>
    </div>

    <div>
      <Button tw="mb-3" size="small" color="warning">
        Warning Small
      </Button>
      <Button tw="mb-3" size="normal" color="warning">
        Warning normal
      </Button>
      <Button tw="mb-3" size="large" color="warning">
        Warning Large
      </Button>
    </div>

    <div tw="flex flex-col items-start">
      <Button tw="mb-3" size="small" color="dark">
        Dark Small
      </Button>
      <Button tw="mb-3" size="normal" color="dark">
        Dark normal
      </Button>
      <Button tw="mb-3" size="large" color="dark">
        Dark Large
      </Button>
    </div>

    <div tw="flex flex-col items-start">
      <Button tw="mb-3" size="small" color="link">
        Link Small
      </Button>
      <Button tw="mb-3" size="normal" color="link">
        Link normal
      </Button>
      <Button tw="mb-3" size="large" color="link">
        Link Large
      </Button>
    </div>
  </div>
);

const Design = () => {
  return (
    <MainLayout>
      <h3>গ্রিড</h3>
      <Grid />
      <Row>
        <Col>
          <Headings />
        </Col>
        <Col>
          <AlertsSection />
        </Col>
      </Row>
      <CardComponents />
      <Row>
        <Col>
          <Buttons />
        </Col>
      </Row>
      <Row>
        <Col>
          <InfoCard title="kicho kotha">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              deleniti autem ullam et explicabo quam optio. Quisquam atque
              repellat sint officia eveniet in impedit, corporis placeat quo
              dicta illo inventore.
            </p>
          </InfoCard>
        </Col>
        <Col>
          <InfoCard title="kicho kotha">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              deleniti autem ullam et explicabo quam optio. Quisquam atque
              repellat sint officia eveniet in impedit, corporis placeat quo
              dicta illo inventore.
            </p>
          </InfoCard>
        </Col>
        <Col>
          <InfoCard title="kicho kotha">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
              deleniti autem ullam et explicabo quam optio. Quisquam atque
              repellat sint officia eveniet in impedit, corporis placeat quo
              dicta illo inventore.
            </p>
          </InfoCard>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Design;
