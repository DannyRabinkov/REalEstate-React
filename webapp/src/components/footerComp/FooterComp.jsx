import { Nav } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { MdAttachEmail } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaRegGrinWink } from "react-icons/fa";
import React from "react";

const FooterComp = () => (
  <div className="footer">
    <Nav className="justify-content-center mt-3" activeKey="/home">
      <Nav.Item style={{ color: "white" }}>
        All rights reserved to Daniel Rabinkov &copy;
      </Nav.Item>
    </Nav>
    <p className="text-center mt-3 mb-2" style={{ color: "white" }}>
      Some great minds gave some advices <FaRegGrinWink></FaRegGrinWink>
    </p>
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home" style={{ color: "aqua" }}>
          Home <GoHome></GoHome>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="mailto: rabinkovdanny@gmail.com"
          style={{ color: "aqua" }}
        >
          Email <MdAttachEmail></MdAttachEmail>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="https://www.facebook.com/danny.rabinkov"
          target="_blank"
          style={{ color: "aqua" }}
        >
          FB <BsFacebook></BsFacebook>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default FooterComp;
