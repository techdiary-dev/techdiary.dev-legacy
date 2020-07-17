import React, { useState, useEffect, useContext } from "react";

import { StyledPhotoUpdater } from "./styles";
import { Card } from "components/Card";
import Button from "components/Button";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import { ME } from "quries/AUTH";
import np from "nprogress";

const UPDATE_PROFILE_PHOTO = gql`
  mutation UPDATE_PROFILE_PHOTO($url: String) {
    updateProfile(data: { profilePhoto: $url }) {
      name
    }
  }
`;

interface Props {
  profilePic: string;
}

const ProfilePhoto: React.FC<Props> = ({ profilePic }: Props) => {
  let [profilePhoto, setProfilePhoto] = useState(null);
  let [updateButton, setUpdateButton] = useState(false);

  let [updateProfile, { loading }] = useMutation(UPDATE_PROFILE_PHOTO, {
    refetchQueries: [{ query: ME }],
  });

  if (loading) np.start();
  else np.done();

  useEffect(() => {
    setProfilePhoto(profilePic);
  }, []);

  const onChangeFile = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    var file = event.target.files[0];
    const fd = new FormData();
    fd.append("file", file);

    fd.append("upload_preset", "techdiary-user-profile-photos");

    fetch("https://api.cloudinary.com/v1_1/techdiary-dev/image/upload", {
      method: "POST",
      body: fd,
    })
      .then((res) => res.json())
      .then((data) => {
        setProfilePhoto(data.secure_url);
        setUpdateButton(true);
      });
  };

  const updateProfilePhoto = () => {
    setUpdateButton(false);
    updateProfile({ variables: { url: profilePhoto } });
  };

  return (
    <Card>
      <StyledPhotoUpdater>
        <div
          className="photo-preview"
          onClick={() => document.getElementById("fileUploader").click()}
        >
          <img src={profilePhoto} alt="user-profile-photo" />
        </div>
        <input
          id="fileUploader"
          type="file"
          style={{ display: "none" }}
          onChange={onChangeFile}
        />
        <p className="label">আপনার প্রোফাইল ছবি</p>
        {updateButton && (
          <Button onClick={updateProfilePhoto}>হালনাগাত করুন</Button>
        )}
      </StyledPhotoUpdater>
    </Card>
  );
};

export default ProfilePhoto;
