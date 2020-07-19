import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { Col, Row } from "styles/StyledGrid";
import styled from "styled-components";
import { Danger, Warning, Message } from "components/Alert";
import { Card, CardHeader } from "components/Card";
import Button from "components/Button";
import { InfoCard } from "components/InfoCard";

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
      <h3>এলার্ট কম্পোনেন্ট সমূহ </h3>
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
      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>
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

const StyledButton = styled.div`
  button {
    margin-right: 15px;
  }
`;

const Buttons = () => (
  <StyledButton>
    <button>Native Button</button>
    <Button type="button">Button Primary</Button>
    <Button size="normal" type="button">
      Button normal
    </Button>
    <Button size="large" type="button">
      Button large
    </Button>
    <Button size="small" type="button">
      Button small
    </Button>

    <Button color="primary" type="button">
      Button primary
    </Button>
    <Button color="secondary" type="button">
      Button secondary
    </Button>
    <Button color="danger" type="button">
      Button danger
    </Button>
    <Button color="warning" type="button">
      Button danger
    </Button>
    <Button color="dark" type="button">
      Button danger
    </Button>
    <Button color="link" type="button">
      Button link
    </Button>
  </StyledButton>
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