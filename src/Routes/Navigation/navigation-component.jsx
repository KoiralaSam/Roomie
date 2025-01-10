import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutAuth } from "../../Utils/firebase-utils";
import "./navigation.styles.scss";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import { ReactComponent as RoomieLogo } from "../../Assets/RoomieLogo.svg";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <div className="sidebar">
        <div className="logoContainer">
          <RoomieLogo />
        </div>
        <div className="buttonContainer">
          <button className="nav-buttons">
            <Link to="/home" />
            <HomeIcon />
          </button>

          <button
            className="nav-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AddCircleOutlineIcon />
            <Link to="/create">Create</Link>
          </button>

          <button
            className="nav-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <RememberMeIcon />
            <Link to="/profile">Profile</Link>
          </button>

          <button
            className="nav-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SearchIcon />
            <Link to="/finder">Finder</Link>
          </button>

          <button
            className="nav-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InfoIcon />
            <Link to="/resources">Resources</Link>
          </button>

          <button
            className="nav-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ChatIcon />
            <Link to="/messages">Messages</Link>
          </button>

          <button
            className="nav-buttons"
            onClick={async () => {
              signOutAuth();
              navigate("/");
            }}
          >
            <LogoutIcon />
          </button>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
