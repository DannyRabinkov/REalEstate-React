import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import HomePageComp from "../../pages/HomePageComp";
import SignInPage from "../../pages/SignInPage";
import BusinessRegPage from "../../pages/BusinessRegPage";
import MyCardsPage from "../../pages/MyCardsPage";
import SignUpPage from "../../pages/SignUpPage";
import AboutPage from "../../pages/AboutPage";

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
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  RealEstateNow
                </Navbar.Brand>
                <Nav.Link to="AboutPage" as={Link}>
                  About
                </Nav.Link>
                <Nav.Link to="BusinessRegPage" as={Link}>
                  Business Registration
                </Nav.Link>
                <Nav.Link to="MyCardsPage" as={Link}>
                  My-Cards
                </Nav.Link>
                <Nav.Link
                  className="justify-content-end"
                  to="SignInPage"
                  as={Link}
                >
                  Sign-In
                </Nav.Link>
                <Nav.Link
                  className="justify-content-end"
                  to="SignUpPage"
                  as={Link}
                >
                  Sign-Up
                </Nav.Link>
                <Nav.Link className="justify-content-end" to="/" as={Link}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/AboutPage">
            <AboutPage />
          </Route>
          <Route path="/BusinessRegPage">
            <BusinessRegPage />
          </Route>
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
