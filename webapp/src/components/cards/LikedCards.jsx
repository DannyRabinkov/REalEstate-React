import React from "react";
import CardComp from "./CardComp";
import { getUserCard } from "../../helpers/javascriptHelpers";
import { Container } from "react-bootstrap";

export default class LikedCards extends React.Component {
  constructor(props) {
    super(props);
    this.printRes = this.printRes.bind(this);
    this.state = {
      cardList: [],
      didAjax: false,
    };
  }

  getCards = () => {
    getUserCard(this.printRes);
  };

  printRes = (data) => {
    if (typeof data != "undefined" && data.length > 0) {
      //temp array for parsed card elements
      const tempArr = data.map((_card) => <CardComp card={_card}></CardComp>);
      this.setState({ cardList: tempArr, didAjax: true });
    }
  };

  render() {
    if (!this.state.didAjax) this.getCards();

    return <Container id="cardsCont">{this.state.cardList}</Container>;
  }
}
