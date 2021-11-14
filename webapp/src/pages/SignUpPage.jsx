import React from "react";
import SignUpComp from "../components/signHelpers/SignUpComp";
import { MdAppRegistration } from "react-icons/md";

export default class SignUpPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h2 className="mainpageheader mt-2 mb-2">
            Sign-Up to create you'r new account! <MdAppRegistration />
          </h2>
          <h3>Sign-up if you want to add you'r appartments! </h3>
          <SignUpComp />
        </div>
      </>
    );
  }
}
