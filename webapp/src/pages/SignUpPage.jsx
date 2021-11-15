import React from "react";
import SignUpComp from "../components/signHelpers/SignUpComp";
import { MdAppRegistration } from "react-icons/md";
import { registerNewAccount } from "../helpers/javascriptHelpers";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser = (data) => {
    registerNewAccount(data, (data) => {
      if (data._id) {
        toast.success("Account Created Successfully", {
          onClose: () => this.setState({ redirect: true }),
        });
      } else {
        toast.error("Eror Acount was not created");
      }
    });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/SignInPage" />;
    return (
      <>
        <div className="container">
          <h2 className="mainpageheader mt-2 mb-2">
            Sign-Up to create you'r new account! <MdAppRegistration />
          </h2>
          <h3>Sign-up if you want to add you'r appartments! </h3>
          <div>
            <SignUpComp clickHandler={this.registerUser} text="Sign up" />
          </div>
        </div>
      </>
    );
  }
}
