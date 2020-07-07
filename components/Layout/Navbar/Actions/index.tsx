import React, { useState, useEffect } from "react";
// import "react-tooltip";
import {
  FiSettings,
  FiBookOpen,
  FiPlus,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

import { GrLogin } from "react-icons/gr";

import Link from "next/link";
import useMe from "components/useMe";
import { BounceLoader } from "react-spinners";
import { LOGOUT } from "quries/AUTH";
// import nProgress from 'nprogress'
import { useMutation } from "@apollo/react-hooks";
import { motion } from "framer-motion";

import { StyledActions, StyledUserActionMenu } from "./styles";
// import UserAvater from "components/UserAvater";
// import ReactTooltip from "react-tooltip";
import swal from "sweetalert";
import { css } from "styled-components";

const UserDropdownActionMenu = ({
  profilePhoto,
  name,
  username,
  handleLogout,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyledUserActionMenu>
      <div
        className="avater"
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        <img className="avater" src={profilePhoto} alt={name} />
      </div>

      <motion.ul
        className="dropdown-menu"
        initial="close"
        animate={open ? "open" : "close"}
        variants={{
          open: { y: 0, opacity: 1, display: "visible" },
          close: {
            y: -14,
            opacity: 0,
            display: "none",
          },
        }}
      >
        <li>
          <Link href={`/${username}`}>
            <a className="dropdown-menu__item">
              <FiUser className="dropdown-menu__icon" />
              <span className="label">আমার প্রোফাইল</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/update-profile">
            <a className="dropdown-menu__item">
              <FiSettings className="dropdown-menu__icon" />
              <span className="label">প্রোফাইল হালনাগাদ</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a className="dropdown-menu__item">
              <FiBookOpen className="dropdown-menu__icon" />
              <span className="label">আমার ড্যাসবোর্ড</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/new">
            <a className="dropdown-menu__item">
              <FiPlus className="dropdown-menu__icon" />
              <span className="label">নতুন ডায়েরি</span>
            </a>
          </Link>
        </li>
        <li>
          <div className="dropdown-menu__item" onClick={handleLogout}>
            <FiLogOut className="dropdown-menu__icon" />
            <span className="label">লগআউট</span>
          </div>
        </li>
      </motion.ul>
    </StyledUserActionMenu>
  );
};

const Actions: React.FC = () => {
  let { data, error, refetch, loading } = useMe();
  let [logout, { loading: loginLogout }] = useMutation(LOGOUT);

  // if (loading || loginLogout) nProgress.start()
  // else nProgress.done()

  const handleLogout = (e) => {
    swal({
      title: "লগআউট করতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ অবশ্যই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        logout().then(() => {
          refetch();
        });
      }
    });
  };

  if (loading) return <BounceLoader size={22} color="#24B3AE" />;
  if (data && !error)
    return (
      <UserDropdownActionMenu
        name={data?.name}
        username={data?.username}
        profilePhoto={data?.profilePhoto}
        handleLogout={handleLogout}
      />
    );
  else
    return (
      <StyledActions>
        <a
          className="login-url"
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI}`}
        >
          <GrLogin /> <span className="label">লগইন করুন</span>
        </a>
      </StyledActions>
    );
};

export default Actions;
