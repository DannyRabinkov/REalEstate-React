import React from "react";
import SignInComp from "../components/signHelpers/SignInComp";
import { GoSignIn } from "react-icons/go";
import { signInUser } from "../helpers/javascriptHelpers";
import { getMeData } from "../helpers/javascriptHelpers";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    /* this.state = { redirect: false }; */
    this.signIn = this.signIn.bind(this);
  }
  signIn = (data) => {
    signInUser(data, (response) => {
      if (response.token) {
        toast.success(
          "Welcome to U",
          {
            onClose: () => (window.location.href = "/"),
          }
          /* this.setState({ redirect: true }) */
        );
        localStorage.setItem("token", response.token);
      } else {
        toast.error("Fail to log in");
      }
    });
  };

  render() {
    /* if (this.state.redirect) return <Redirect to="/" />; */
    return (
      <>
        <Container>
          <h2 className="mainpageheader mt-2 mb-2">
            Sign in to you'r account! <GoSignIn />
          </h2>
          <SignInComp clickHandler={this.signIn} text="Sign-in" />
        </Container>
      </>
    );
  }
}
