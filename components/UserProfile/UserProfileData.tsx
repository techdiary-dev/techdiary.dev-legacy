import React from "react";
import { StyledUserProfileData } from "./styles";
import "twin.macro";

interface Props {
  user: any;
}

const UserProfileData = ({ user }: Props) => {
  return (
    <StyledUserProfileData>
      <div tw="h-40 w-40 rounded-full overflow-hidden col-span-1">
        <img
          tw="w-full object-fill"
          src={user?.profilePhoto}
          alt={user?.username}
        />
      </div>

      <div>
        <h2 tw="text-2xl">{user?.name}</h2>
        <p tw="text-base my-2">{user?.designation}</p>
        <p tw="text-base">{user?.bio}</p>
      </div>
    </StyledUserProfileData>
  );
};

export default UserProfileData;
