import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { signOutAuth } from "../../Utils/firebase-utils";
import "./navigation.styles.scss";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="navigation">
        <div className="logoContainer">
          <Link to="/home">Home</Link>
        </div>

        <div>
          <Link to="/create">Create</Link>
        </div>

        <div>
          <Link to="/profile">Profile</Link>
        </div>

        <div>
          <Link to="/finder">Finder</Link>
        </div>

        <div>
          <Link to="/resources">Resources</Link>
        </div>

        <div>
          <Link to="/messages">Messages</Link>
        </div>

        <div
          onClick={async () => {
            await signOutAuth();
            navigate("/");
          }}
        >
          SignOut
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
