import React from "react";
import SignInComp from "../components/signHelpers/SignInComp";
import { GoSignIn } from "react-icons/go";
import { signInSocket, signInUser } from "../helpers/javascriptHelpers";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  signIn = (data) => {
    signInUser(data, (response) => {
      if (response.token) {
        this.props.socket.connect();
        toast.success("Welcome to U", {
          onClose: () => (window.location.href = "/"),
        });
        localStorage.setItem("token", response.token);
        this.props.socket.auth = { token: response.token };
        signInSocket(data);
        // console.log(signInSocket(data));
      } else {
        toast.error("Fail to log in");
      }
    });
  };

  render() {
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
