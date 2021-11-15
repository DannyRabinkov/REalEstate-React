import validateSignUp from "./signUpHelper";
import { Form, Button } from "react-bootstrap";
import { notify } from "react-toastify";
import { toast } from "react-toastify";

function SignUpComp({ text = "", clickHandler = (f) => f }) {
  const notify = (message) => toast(message);
  return (
    <>
      <Form className="col-lg-8 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            var validatioErrorOrData = validateSignUp(
              "formBasicName",
              "formBasicEmail",
              "formBasicPassword"
            );
            if (typeof validatioErrorOrData == "string") {
              notify(validatioErrorOrData);
            } else {
              clickHandler(validatioErrorOrData);
            }
          }}
        >
          Sign-Up
        </Button>
      </Form>
    </>
  );
}

export default SignUpComp;
