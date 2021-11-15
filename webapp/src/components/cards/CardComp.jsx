import { Card, Button } from "react-bootstrap";
import React from "react";
import { deleteCard } from "../../helpers/javascriptHelpers";

export default class CardComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleted: false,
    };
  }

  deleteCardEvent = (id) => {
    deleteCard(id, () =>
      this.setState({
        deleted: true,
      })
    );
  };

  render() {
    if (this.state.deleted) return <React.Fragment />;
    else
      return (
        <div className="container">
          <Card className="Card">
            <Card.Img
              variant="top"
              style={{
                width: "16rem",
              }}
              src={this.props.card.bizImage}
            />{" "}
            <Card.Body>
              <Card.Title> {this.props.card.bizName} </Card.Title>{" "}
              <Card.Text> {this.props.card.bizDescription} </Card.Text>{" "}
              <Card.Text> {this.props.card.bizAddress} </Card.Text>{" "}
              <Card.Text> {this.props.card.bizPhone} </Card.Text>{" "}
              <Button
                variant="primary"
                onClick={() => this.deleteCardEvent(this.props.card._id)}
              >
                Remove this card{" "}
              </Button>{" "}
            </Card.Body>{" "}
          </Card>
        </div>
      );
  }
}
