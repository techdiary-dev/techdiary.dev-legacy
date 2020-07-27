import React from "react";
import {
  FiBookOpen,
  FiEdit2,
  FiPauseCircle,
  FiSettings,
  FiBookmark,
  FiHeart,
} from "react-icons/fi";
import { SidebarMenuCardStyles, MenuItem, SidebarMenuStyles } from "./styles";

import Link from "next/link";

const SidebarMenu: React.FC = () => {
  return (
    <SidebarMenuStyles>
      <SidebarMenuCardStyles>
        <h3 className="group-title">আমার ডায়েরি</h3>
        <MenuItem>
          <FiBookOpen />
          <Link href="/dashboard">
            <a className="url">সকল ডায়েরি</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <FiEdit2 />
          <Link href="/new">
            <a className="url">নতুন ডায়েরি</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <FiBookOpen />
          <Link href="/dashboard/published">
            <a className="url">প্রকাশিত ডায়েরি</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <FiPauseCircle />
          <Link href="/dashboard/draft">
            <a className="url">খসড়া ডায়েরি</a>
          </Link>
        </MenuItem>
      </SidebarMenuCardStyles>

      <SidebarMenuCardStyles>
        <h3 className="group-title">আমার পছন্দ</h3>
        <MenuItem>
          <FiBookmark />
          <Link href="/dashboard/bookmarks">
            <a className="url">বুকমার্ক সমূহ</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <FiHeart />
          <Link href="/dashboard/liked">
            <a className="url">পছন্দকৃত ডায়েরি</a>
          </Link>
        </MenuItem>
      </SidebarMenuCardStyles>

      <SidebarMenuCardStyles>
        <h3 className="group-title">সেটিংস</h3>
        <MenuItem>
          <FiSettings />
          <Link href="/dashboard/update-profile">
            <a className="url">প্রোফাইল হালনাগাদ</a>
          </Link>
        </MenuItem>
      </SidebarMenuCardStyles>
    </SidebarMenuStyles>
  );
};

export default SidebarMenu;
