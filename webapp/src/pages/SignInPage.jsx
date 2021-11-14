import React from "react";
import SignInComp from "../components/signHelpers/SignInComp";
import { GoSignIn } from "react-icons/go";

export default class SignInPage extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h2 className="mainpageheader mt-2 mb-2">
            Sign in to you'r account! <GoSignIn />
          </h2>
          <SignInComp />
        </div>
      </>
    );
  }
}
