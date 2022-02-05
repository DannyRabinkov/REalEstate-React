import { Button, Container } from "react-bootstrap";
import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { RiArrowGoBackFill } from "react-icons/ri";
import CardsCont from "../components/cards/CardsCont";

export default class HomePageComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikedMode: false,
      isHomedMode: true,
      isSearch: "",
    };
    this.hideOrShow = this.hideOrShow.bind(this);
    this.searchParam = this.searchParam.bind(this);
  }

  hideOrShow = () => {
    if (!this.state.isLikedMode) {
      return "hidden";
    } else {
      return "";
    }
  };

  searchParam = () => {
    let searchVal = document.getElementById("inputSearch").value;
    this.setState({ isSearch: searchVal });
    console.log(this.state.isSearch);
  };

  render() {
    return (
      <>
        <Container>
          <h2 className="mainpageheader mt-2 mb-2">
            Fined you'r next appartment!!
          </h2>
          <div className="searchBox">
            <input
              id="inputSearch"
              type="text"
              placeholder="search..."
              // onChange={(e) => {
              //   // e.preventDefault();
              //   this.setState({ isSearch: e.target.value });
              //   console.log(this.state.isSearch);
              // }}
            />
            <Button onClick={this.searchParam}>search</Button>
          </div>
          <div className="btnsLeft">
            <Button
              className="mx-2"
              style={{ color: "#98c1d9", backgroundColor: "#ee6c4d" }}
              onClick={() => {
                this.setState({ isLikedMode: true });
                this.setState({ isHomedMode: false });
              }}
            >
              Liked <BsHeartFill />
            </Button>
            {this.state.isHomedMode && (
              <CardsCont
                // searchMode={this.state.isSearchdMode}
                searcher={this.state.isSearch}
                FetchType="Home"
              />
            )}
            <Button
              style={{ color: "#98c1d9", backgroundColor: "#3d5a80" }}
              hidden={this.hideOrShow()}
              onClick={() => {
                this.setState({ isLikedMode: false });
                this.setState({ isHomedMode: true });
              }}
            >
              Back <RiArrowGoBackFill />
            </Button>
          </div>
          <Container className="p-0">
            {this.state.isLikedMode && <CardsCont FetchType="Liked" />}
          </Container>
        </Container>
      </>
    );
  }
}
