import { Card, Button, Container } from "react-bootstrap";
import React from "react";
import { deleteCard } from "../../helpers/javascriptHelpers";
import { BsHeartFill } from "react-icons/bs";
import { addLiked } from "../../helpers/LikeHelper";
import { toast } from "react-toastify";

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
        <Container>
          <Card className="Card">
            <Card.Img
              variant="top"
              style={{
                width: "16rem",
              }}
              src={this.props.card.bizImage}
            />
            <Card.Body>
              <Card.Title>TITLE: {this.props.card.bizName} </Card.Title>
              <Card.Text>
                DESCRIPTION: {this.props.card.bizDescription}
              </Card.Text>
              <Card.Text>ADDRESS: {this.props.card.bizAddress} </Card.Text>
              <Card.Text>PHONE: {this.props.card.bizPhone} </Card.Text>
              {this.props.FetchType == "Personal" && (
                <Button
                  variant="secondary"
                  onClick={() => this.deleteCardEvent(this.props.card._id)}
                >
                  Remove this card
                </Button>
              )}
              {(this.props.FetchType == "Home" ||
                this.props.FetchType == "Liked") && (
                <Button
                  id="likeBtn"
                  onClick={() =>
                    addLiked(this.props.card, () => {
                      toast.success("Added to likes");
                    })
                  }
                >
                  Like <BsHeartFill />
                </Button>
              )}
            </Card.Body>
          </Card>
        </Container>
      );
  }
}
