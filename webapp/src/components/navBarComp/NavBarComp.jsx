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
// import { useState } from "react";

const token = localStorage.getItem("token");
const email = localStorage.getItem("userData");

const io = require("socket.io-client");
let socket = io.connect("http://192.168.1.58:3001/realestateapp", {
  path: "/sqws",
  autoConnect: false,
});

if (token) {
  socket.auth = { token: token, email: email };
  socket.connect();
}

function NavBarComp() {
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
                  />
                  RealEstateNow
                </Navbar.Brand>
                <Nav.Link to="MyCardsPage" as={Link} hidden={hideForGuest()}>
                  My-Cards
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link to="SignInPage" as={Link} hidden={hideForUser()}>
                  Sign-In
                </Nav.Link>
                <Nav.Link to="SignUpPage" as={Link} hidden={hideForUser()}>
                  Sign-Up
                </Nav.Link>
                <Nav.Link
                  /* to="/"
                  as={Link} */
                  hidden={hideForGuest()}
                  onClick={() =>
                    toast.info("Goodbye!", {
                      onClose: () => logout(),
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
            <SignInPage
              socket={socket} /* token={(token) => setToken(token)} */
            />
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
