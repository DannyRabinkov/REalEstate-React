import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import HomePageComp from "../../pages/HomePageComp";
import SignInPage from "../../pages/SignInPage";
import MyCardsPage from "../../pages/MyCardsPage";
import SignUpPage from "../../pages/SignUpPage";
import LogoApp from "../../logo/logoApp.png";
import {
  hideForUser,
  hideForGuest,
  logout,
} from "../../helpers/javascriptHelpers.js";
import { toast } from "react-toastify";

function NavBarComp({ setUserCallback, user }) {
  return (
    <Router>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Navbar.Brand to="/" as={Link}>
                  <img
                    alt=""
                    src={LogoApp}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  RealEstateNow
                </Navbar.Brand>
                <Nav.Link
                  to="MyCardsPage"
                  as={Link}
                  hidden={hideForGuest(user)}
                >
                  My-Cards
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link to="SignInPage" as={Link} hidden={hideForUser(user)}>
                  Sign-In
                </Nav.Link>
                <Nav.Link to="SignUpPage" as={Link} hidden={hideForUser(user)}>
                  Sign-Up
                </Nav.Link>
                <Nav.Link
                  /* to="/"
                  as={Link} */
                  hidden={hideForGuest(user)}
                  onClick={() =>
                    toast.info("Goodbye!", {
                      onClose: () => logout(setUserCallback),
                    })
                  }
                >
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/MyCardsPage">
            <MyCardsPage />
          </Route>
          <Route path="/SignInPage">
            <SignInPage />
          </Route>
          <Route path="/SignUpPage">
            <SignUpPage />
          </Route>
          <Route path="/">
            <HomePageComp />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
export default NavBarComp;
