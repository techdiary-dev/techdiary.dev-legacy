import React, { useState } from "react";
import "react-tooltip";
import { FiSettings, FiBookOpen, FiPlus, FiLogOut } from "react-icons/fi";

import { GrLogin } from "react-icons/gr";

import Link from "next/link";
import useMe from "components/useMe";
import { BounceLoader } from "react-spinners";
import { LOGOUT } from "quries/AUTH";
// import nProgress from 'nprogress'
import { useMutation } from "@apollo/react-hooks";

import { StyledActions, StyledUserActionMenu } from "./styles";
import UserAvater from "components/UserAvater";
import ReactTooltip from "react-tooltip";
import swal from "sweetalert";

const UserDropdownActionMenu = ({
  profilePhoto,
  name,
  username,
  handleLogout,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <StyledUserActionMenu>
      <div className="avater" onClick={() => setOpen(!open)}>
        <img className="avater" src={profilePhoto} alt={name} />
      </div>
      {open && (
        <ul className="dropdown-menu">
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
        </ul>
      )}
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
