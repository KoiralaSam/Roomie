import React, { useState, useContext } from "react";
import { userContext } from "../../Component/Context/user-context";
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
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as RoomieLogo } from "../../Assets/RoomieLogo.svg";
import Create from "../Create/create";

export default function Navigation() {
  const { create, setCreate } = useContext(userContext);
  const navigate = useNavigate();

  const handleCreate = () => {
    setCreate(!create);
  };
  return (
    <div className="nav-container">
      <div className="sidebar">
        <div className="logoContainer">
          <RoomieLogo />
        </div>
        <div className="buttonContainer">
          <button className="nav-buttons" onClick={() => navigate("/home")}>
            <HomeIcon />
          </button>

          <button
            className="nav-buttons"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={handleCreate}
          >
            <AddCircleOutlineIcon />
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
        {create && (
          <div className="create-container">
            <button className="close-button" onClick={handleCreate}>
              <CloseIcon />
            </button>
            <Create />
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}
