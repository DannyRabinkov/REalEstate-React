import React from "react";
import { creatNewCard } from "../helpers/javascriptHelpers";
import { toast } from "react-toastify";
import { Container, Button } from "react-bootstrap";
import CardsCont from "../components/cards/CardsCont";
import CreateCardComp from "../components/cards/CreateCardComp";

export default class MyCardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMode: false,
    };
    this.insertCard = this.insertCard.bind(this);
  }

  insertCard = (data) => {
    creatNewCard(data, (data) => {
      if (data._id) {
        toast.success("Card Created Successfully", {
          onClose: () => {
            !this.state.isAddMode && <CardsCont />;
          },
        });
      } else {
        toast.error("Error card was not created");
      }
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h2 className="mainpageheader mt-2 mb-2">
            Add, Edit or Delete you'r appartments!!
          </h2>
          <Button
            className="primary-button btn btn-success"
            onClick={() => {
              this.setState({ isAddMode: true });
            }}
          >
            Create new card
          </Button>
          <Container className="p-0">
            {!this.state.isAddMode && <CardsCont />}
            {this.state.isAddMode && (
              <CreateCardComp clickHandler={this.insertCard} />
            )}
          </Container>
        </div>
      </>
    );
  }
}
