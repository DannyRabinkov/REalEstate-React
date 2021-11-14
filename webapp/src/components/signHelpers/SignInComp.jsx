import validateSignIn from "./signInHelper";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function SignInComp({ clickHandler = (f) => f }) {
  return (
    <>
      <Form className="col-lg-8 mx-auto">
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
            var errorOrData = validateSignIn(
              "formBasicEmail",
              "formBasicPassword"
            );
            if (typeof errorOrData == "string") {
              toast.error(errorOrData);
            } else {
              clickHandler(errorOrData);
            }
          }}
        >
          Sign-in
        </Button>
      </Form>
    </>
  );
}

export default SignInComp;
