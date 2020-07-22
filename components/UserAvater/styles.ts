import styled from "styled-components";
import { UserAvaterSize } from "./index";
import tw from "twin.macro";

export const StyledUserAvater = styled.div<{ size?: UserAvaterSize }>`
  ${tw`flex items-center`}

  .avater {
    ${tw`h-10 w-10 rounded-full mr-2`}
  }

  .info {
    &__name {
      ${tw`text-base font-bold`}
    }
    &__username {
      ${tw`text-sm`}
    }
  }
`;
