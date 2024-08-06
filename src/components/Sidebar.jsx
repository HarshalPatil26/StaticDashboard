import React from "react";
import { MdDeveloperBoard } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaClipboardCheck } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdAnalytics } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { IoMdLogOut } from "react-icons/io";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <MdDeveloperBoard className="icon_header" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          <ImCross />
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <IoMdHome className="icon" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdAnalytics className="icon" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaClipboardCheck className="icon" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <FaWallet className="icon" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoBagCheck className="icon" />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <IoMdLogOut className="icon" id="logout"/>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
