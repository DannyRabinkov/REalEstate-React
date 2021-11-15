import { Form, Button } from "react-bootstrap";
import { creatNewCard } from "../../helpers/javascriptHelpers";
import { toast } from "react-toastify";

function CreateCardComp() {
  return (
    <Form className="col-lg-8 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicBusinessName">
        <Form.Label>Title:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
        <Form.Label>Description:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
        <Form.Label>Address:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
        <Form.Label>Phone:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBusinessImage">
        <Form.Label>Business Image, Please enter a URL:</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Button
        variant="primary"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          registerCard();
        }}
      >
        Create Card
      </Button>
    </Form>
  );
}

function getInputData() {
  return {
    bizName: document.getElementById("formBasicBusinessName").value,
    bizDescription: document.getElementById("formBasicBusinessDescription")
      .value,
    bizAddress: document.getElementById("formBasicBusinessAddress").value,
    bizPhone: document.getElementById("formBasicBusinessPhone").value,
    bizImage: document.getElementById("formBasicBusinessImage").value,
  };
}

function registerCard() {
  const data = getInputData();
  creatNewCard(data, (data) => {
    if (data._id) {
      toast.success("Card Created Successfully");
    } else {
      toast.error("Error Card was not created");
    }
  });
}

export default CreateCardComp;
