import React from "react";
import LogoutIcon from "public/icons/log-out.svg";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "quries/AUTH";
import np from "nprogress";
import { useRouter } from "next/router";

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
  const router = useRouter();

  if (loading) np.start();
  else np.done();

  const handleClick = (e) => {
    logout().then(() => {
      router.push("/");
      client.clearStore();
    });
  };

  return (
    <StyledLogoutButton onClick={handleClick}>
      <LogoutIcon />
    </StyledLogoutButton>
  );
};
