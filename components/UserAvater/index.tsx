import React, { FC } from "react";
import Link from "next/link";
import { StyledUserAvater } from "./styles";

export type UserAvaterSize = "sm" | "xl";

interface Props {
  name?: string;
  username?: string;
  profilePhoto?: string;
  size?: UserAvaterSize;
}

const UserAvater: FC<Props> = ({
  name,
  username,
  profilePhoto,
  size,
}: Props) => {
  return (
    <StyledUserAvater size={size}>
      <img className="avater" src={profilePhoto} alt={name} />
      <div className="info">
        <div className="info__name">
          <Link href="/[username]" as={`/${username}`}>
            <a>{name}</a>
          </Link>
        </div>
        <div className="info__username">
          <Link href="/[username]" as={`/${username}`}>
            <a>{username}</a>
          </Link>
        </div>
      </div>
    </StyledUserAvater>
  );
};

export default UserAvater;
