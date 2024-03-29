import styled from "styled-components";
import { Row, Column } from "styled-grid-system-component";
export const StyledUserprofile = styled.div``;
import tw from "twin.macro";

export const StyledUserProfileData = styled.div`
  max-width: 685px;
  margin: auto;
  display: grid;
  grid-template-columns: 155px auto;
  padding: 6rem 0;

  @media all and (max-width: 750px) {
    text-align: center;
    grid-template-columns: auto;
    padding: 0 25px;

    .user-profile-photo {
      margin: auto;
      margin-bottom: 25px;
    }
  }

  column-gap: 50px;
  .user-profile-photo {
    width: 155px;
    height: 155px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
    }
  }
`;

export const StyledUserMetaData = styled.div`
  ${tw`text-base`}
  a {
    ${tw`text-base`}
  }
  .infos {
    display: flex;
    flex-direction: column;
    &__info {
      display: flex;
      align-items: center;
      svg {
        margin-right: 12px;
        width: 22px;
        height: 22px;
      }
      margin-bottom: 12px;
    }
  }
  .links {
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    &__heading {
      ${tw`text-base`}
    }
    &__link {
      display: flex;
      align-items: center;
      svg {
        margin-right: 12px;
        width: 22px;
        height: 22px;
      }
      margin-bottom: 12px;
    }
  }
`;
