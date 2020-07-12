import React from "react";
import LogoutIcon from "public/icons/log-out.svg";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { LOGOUT } from "quries/AUTH";
import np from "nprogress";

const StyledLogoutButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

interface Props {
  refetchMe?: Function;
}

export const Logout = ({ refetchMe }: Props) => {
  let [logout, { loading, client }] = useMutation(LOGOUT);

  if (loading) np.start();
  else np.done();

  const handleClick = () => {
    logout().then(() => {
      window.localStorage.clear();
      client.clearStore();
    });
  };

  return (
    <StyledLogoutButton onClick={handleClick}>
      <LogoutIcon />
    </StyledLogoutButton>
  );
};
