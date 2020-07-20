import React from "react";
import { StyledUserProfileData } from "./styles";
interface Props {
  user: any;
}

const UserProfileData = ({ user }: Props) => {
  return (
    <StyledUserProfileData>
      <div className="user-profile-photo">
        <img src={user?.profilePhoto} alt={user?.username} />
      </div>

      <div className="user-profile-data">
        <h2 className="user-profile-data__name">{user?.name}</h2>
        <p className="user-profile-data__username">{user?.designation}</p>
        <p className="user-profile-data__bio">{user?.bio}</p>
      </div>
    </StyledUserProfileData>
  );
};

export default UserProfileData;
