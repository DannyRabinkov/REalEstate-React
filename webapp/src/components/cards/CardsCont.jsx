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
      // isSearch: "",
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
      // console.log(
      //   data
      //     // .filter((cards) =>

      //     .map((cards) =>
      //       this.props.searcher === ""
      //         ? cards.bizName
      //         : cards.bizName.this.props.searcher
      //     )
      // );
      //temp array for parsed card elements
      const tempArr = Object.values(data)
        // .filter((_card) => {
        // if (this.props.searcher === "") {
        // return _card;
        // } else if (
        // this.props.searcher.toLowerCase().includes(this.props.searcher)
        // )
        // return _card.bizName;
        // return _card.bizName;
        // })
        .map((_card) => (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <CardComp card={_card} {...this.props}></CardComp>
          </div>
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
