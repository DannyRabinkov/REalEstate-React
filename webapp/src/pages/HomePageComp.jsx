import { Button, Container } from "react-bootstrap";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import LikedCards from "../components/cards/LikedCards";

export default class HomePageComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikedMode: false,
    };
    this.hideOrShow = this.hideOrShow.bind(this);
  }

  hideOrShow = () => {
    if (!this.state.isLikedMode) {
      return "hidden";
    } else {
      return "";
    }
  };

  render() {
    return (
      <>
        <Container>
          <h2 className="mainpageheader mt-2 mb-2">
            Fined you'r next appartment!!
          </h2>
          <div className="btnsLeft">
            <Button
              className="mx-2"
              style={{ color: "#98c1d9", backgroundColor: "#ee6c4d" }}
              onClick={() => {
                this.setState({ isLikedMode: true });
              }}
            >
              Liked <BsHeartFill />
            </Button>
            <Button
              style={{ color: "#98c1d9", backgroundColor: "#3d5a80" }}
              hidden={this.hideOrShow()}
              onClick={() => {
                this.setState({ isLikedMode: false });
              }}
            >
              {" "}
              Back <RiArrowGoBackFill />
            </Button>
          </div>
          <Container className="p-0">
            {this.state.isLikedMode && <LikedCards />}
          </Container>
        </Container>
      </>
    );
  }
}
