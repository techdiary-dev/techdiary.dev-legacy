import styled from "styled-components";
import tw from "twin.macro";

export const SidebarMenuStyles = styled.div``;

export const SidebarMenuCardStyles = styled.div`
  ${tw`shadow bg-white rounded p-2 mb-4`}
  .group-title {
    ${tw`text-base text-lightDark mb-0`}
  }
`;
export const MenuItem = styled.div`
  ${tw`flex items-center text-base mb-1 py-2`}
  .url {
    ${tw`ml-1`}
  }
  svg {
    width: 30px;
    height: 15px;
  }
`;
