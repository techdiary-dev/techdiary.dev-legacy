import React, { useState, useEffect, useRef } from "react";
import {
  FiSettings,
  FiBookOpen,
  FiBookmark,
  FiPlus,
  FiLogOut,
  FiUser,
  FiHeart,
} from "react-icons/fi";
import "twin.macro";

import { GrLogin } from "react-icons/gr";

import Link from "next/link";
import useMe from "components/useMe";
import { BounceLoader } from "react-spinners";
import { LOGOUT } from "quries/AUTH";
import { useMutation } from "@apollo/client";
import { motion } from "framer-motion";
import { StyledActions, StyledUserActionMenu } from "./styles";
import swal from "sweetalert";
import { useRouter } from "next/router";

const UserDropdownActionMenu = ({
  profilePhoto,
  name,
  username,
  handleLogout,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const divImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickoutSide(event) {
      if (divImageRef.current && !divImageRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickoutSide);

    return () => document.removeEventListener("mousedown", handleClickoutSide);
  }, [divImageRef]);

  return (
    <StyledUserActionMenu>
      <div className="avater" onClick={() => setOpen(!open)} ref={divImageRef}>
        <img className="avater" src={profilePhoto} alt={name} />

        <motion.ul
          animate={open ? "open" : "close"}
          initial="close"
          variants={{
            open: {
              opacity: 1,
              // visibility: "visible",
              clipPath: "circle(200% at 50% 0%)",
              y: 0,
            },
            close: {
              opacity: 0,
              // visibility: "hidden",
              clipPath: "circle(0% at 50% 0%)",
              y: 20,
            },
          }}
          className="dropdown-menu"
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <li>
            <Link href="/[username]" as={`/${username}`}>
              <a className="dropdown-menu__item">
                <FiUser className="dropdown-menu__icon" />
                <span className="label">আমার প্রোফাইল</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/bookmarks">
              <a className="dropdown-menu__item">
                <FiBookmark className="dropdown-menu__icon" />
                <span className="label">বুকমার্ক সমূহ</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/liked">
              <a className="dropdown-menu__item">
                <FiHeart className="dropdown-menu__icon" />
                <span className="label">পছন্দকৃত ডায়েরি</span>
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
            <Link href="/dashboard/update-profile">
              <a className="dropdown-menu__item">
                <FiSettings className="dropdown-menu__icon" />
                <span className="label">প্রোফাইল হালনাগাদ</span>
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
      </div>
    </StyledUserActionMenu>
  );
};

const Actions: React.FC = () => {
  let { data, error, loading, refetch } = useMe();
  let [logout, { loading: loginLogout, client }] = useMutation(LOGOUT);
  const router = useRouter();

  const handleLogout = (e) => {
    swal({
      title: "লগআউট করতে চান?",
      icon: "warning",
      buttons: ["না", "হ্যাঁ অবশ্যই"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        logout().then(() => refetch());
        client.clearStore();
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
