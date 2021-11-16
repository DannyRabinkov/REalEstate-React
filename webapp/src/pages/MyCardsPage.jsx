import React from "react";
import { creatNewCard } from "../helpers/javascriptHelpers";
import { toast } from "react-toastify";
import { Container, Button } from "react-bootstrap";
import CardsCont from "../components/cards/CardsCont";
import CreateCardComp from "../components/cards/CreateCardComp";
/* import { Redirect } from "react-router-dom"; */

export default class MyCardsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddMode: false,
    };
    /* this.state = { redirect: false }; */
    this.insertCard = this.insertCard.bind(this);
    this.hideOrShow = this.hideOrShow.bind(this);
  }

  insertCard = (data) => {
    creatNewCard(data, (data) => {
      if (data._id) {
        toast.success("Card Created Successfully", {
          onClose: () => this.setState({ redirect: true }),
        });
      } else {
        toast.error("Error card was not created");
      }
    });
  };

  hideOrShow = () => {
    if (!this.state.isAddMode) {
      return "hidden";
    } else {
      return "";
    }
  };

  render() {
    /* if (this.state.redirect) return <Redirect to="/" />; */
    return (
      <>
        <Container>
          <h2 className="mainpageheader mt-2 mb-2">
            Add, Edit or Delete you'r appartments!!
          </h2>
          <Button
            className="primary-button btn btn-danger"
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
            <Button
              id="cancelBtn"
              className="primary"
              variant="secondary"
              type="button"
              hidden={this.hideOrShow()}
              onClick={() => {
                this.setState({ isAddMode: false });
              }}
            >
              Cancel
            </Button>
          </Container>
        </Container>
      </>
    );
  }
}
