import { Button, Container } from "react-bootstrap";
import React from "react";
import { BsHeartFill } from "react-icons/bs";

export default class HomePageComp extends React.Component {
  render() {
    return (
      <>
        <Container>
          <h2 className="mainpageheader mt-2 mb-2">
            Fined you'r next appartment!!
          </h2>
          <Button style={{ color: "#98c1d9", backgroundColor: "#ee6c4d" }}>
            Liked <BsHeartFill />
          </Button>
        </Container>
      </>
    );
  }
}
