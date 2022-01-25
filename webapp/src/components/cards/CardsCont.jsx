import React from "react";
import CardComp from "./CardComp";
import { getUserCard, getAllUsersCard } from "../../helpers/javascriptHelpers";
import { Container } from "react-bootstrap";
import { getLiked } from "../../helpers/LikeHelper.js";

export default class CardsCont extends React.Component {
  constructor(props) {
    super(props);
    this.printRes = this.printRes.bind(this);
    this.state = {
      cardList: [],
      didAjax: false,
    };
  }

  getCards = () => {
    if (this.props.FetchType === "Personal") {
      getUserCard(this.printRes);
    }
    if (this.props.FetchType === "Liked") {
      getLiked(this.printRes);
    }
    if (this.props.FetchType === "Home") {
      getAllUsersCard(this.printRes);
    }
  };

  printRes = (data) => {
    if (typeof data != "undefined" && data.length > 0) {
      //temp array for parsed card elements
      const tempArr = data.map((_card) => (
        <CardComp card={_card} {...this.props}></CardComp>
      ));
      this.setState({ cardList: tempArr, didAjax: true });
    }
  };

  render() {
    if (!this.state.didAjax) this.getCards();

    return (
      <Container id="cardsCont" key={Math.random().toString(36).substr(2, 9)}>
        {this.state.cardList}
      </Container>
    );
  }
}
