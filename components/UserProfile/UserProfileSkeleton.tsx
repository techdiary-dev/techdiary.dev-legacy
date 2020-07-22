import React from "react";
import { Row, Col } from "styles/StyledGrid";
import Skeleton from "react-loading-skeleton";
import {
  StyledUserprofile,
  StyledUserProfileData,
  StyledUserMetaData,
} from "./styles";
import { FiGithub, FiMapPin } from "react-icons/fi";
import EducationIcon from "public/icons/education.svg";

const UserProfileSekeleton = () => {
  return (
    <StyledUserprofile>
      <StyledUserProfileData>
        <Skeleton circle={true} height={155} width={155} />

        <div className="user-profile-data">
          <h2 className="user-profile-data__name">
            <Skeleton height={15} width="50%" />
          </h2>
          <p className="user-profile-data__username">
            <Skeleton height={12} width="100%" />
          </p>
          <p className="user-profile-data__bio">
            <Skeleton count={5} height={4} />
          </p>
        </div>
      </StyledUserProfileData>

      <Row>
        <Col md={3} sidebar>
          <Skeleton height={15} />
          <div style={{ height: 5 }} />
          <Skeleton height={15} />
          <div style={{ height: 5 }} />
          <Skeleton height={15} />
          <div style={{ height: 25 }} />
          <Skeleton height={15} />
          <div style={{ height: 5 }} />
          <Skeleton height={15} />
          <div style={{ height: 5 }} />
          <Skeleton height={15} />
        </Col>

        <Col md={6} main>
          <Skeleton height={250} />
          <div style={{ height: 15 }} />
          <Skeleton height={250} />
        </Col>

        <Col md={3} sidebar></Col>
      </Row>
    </StyledUserprofile>
  );
};

export default UserProfileSekeleton;
