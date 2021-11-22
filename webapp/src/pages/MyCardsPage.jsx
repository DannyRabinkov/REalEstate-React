import React, { useState } from "react";
import { creatNewCard } from "../helpers/javascriptHelpers";
import { Container, Button } from "react-bootstrap";
import CardsCont from "../components/cards/CardsCont";
import CreateCardComp from "../components/cards/CreateCardComp";

function MyCardsPage() {
  const [isAddMode, setAddMode] = useState(false);

  function insertCard(data) {
    creatNewCard(data, () => {});
  }

  function hideOrShow() {
    if (!isAddMode) {
      return "hidden";
    } else {
      return "";
    }
  }

  return (
    <>
      <Container>
        <h2 className="mainpageheader mt-2 mb-2">
          Add, Edit or Delete you'r appartments!!
        </h2>
        <Button
          className="primary-button btn btn-danger"
          onClick={() => {
            setAddMode(true);
          }}
        >
          Create new card
        </Button>
        <Container className="p-0">
          {!isAddMode && <CardsCont MyCards={true} />}
          {isAddMode && (
            <CreateCardComp clickHandler={insertCard} backToPage={setAddMode} />
          )}
          <Button
            id="cancelBtn"
            className="primary"
            variant="secondary"
            type="button"
            hidden={hideOrShow()}
            onClick={() => {
              setAddMode(false);
            }}
          >
            Cancel
          </Button>
        </Container>
      </Container>
    </>
  );
}
export default MyCardsPage;
