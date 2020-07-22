import styled from "styled-components";
import UserAvater from "components/UserAvater";
import tw from "twin.macro";

export const StyledWrapper = styled.div`
  ${tw`shadow bg-secondary py-1`}
  ${tw`fixed top-0 left-0 w-full z-10`}
`;

export const StyledNavbarInner = styled.div`
  ${tw`flex justify-between items-center h-12`}
`;

export const UserAvaterModified = styled(UserAvater)`
  width: 2050px;
  /* justify-content: flex-end; */
  background-color: red;
`;
