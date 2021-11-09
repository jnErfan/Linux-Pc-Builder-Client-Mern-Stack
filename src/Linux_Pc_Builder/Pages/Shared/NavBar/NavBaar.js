import React, { useRef, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Popover,
  Overlay,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbaar.css";

const NavBaar = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const defaultUserImage = "https://i.ibb.co/hM9DLXG/avt2.png";
  const activeStyle = {
    borderBottom: "5px solid rgb(45, 45, 45)",
  };
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const [scrollChainge, setSrollChainge] = useState(false);

  const onScrollHeader = () => {
    window.scrollY >= 50 ? setSrollChainge(true) : setSrollChainge(false);
  };

  window.addEventListener("scroll", onScrollHeader);

  return (
    <div>
      <Navbar
        fixed="top"
        className={
          scrollChainge
            ? "navbarContainer"
            : "bg-transparent navbarContainerRes"
        }
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              width="60%"
              className="linuxLogo"
              src="https://i.ibb.co/TkTZrbb/linux-Logo.png"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className="fw-bold text-decoration-none mx-4  navbarButton"
                to="/home"
                activeStyle={activeStyle}
              >
                <i className="fas fa-laptop-house fs-5 me-1"></i> Home
              </NavLink>
              <NavLink
                className="fw-bold text-decoration-none mx-4  navbarButton"
                to="/Blogs"
                activeStyle={activeStyle}
              >
                <i className="fab fa-slack fs-5 me-1"></i> Blogs
              </NavLink>
              <NavLink
                className="fw-bold text-decoration-none mx-4  navbarButton"
                to="/contract"
                activeStyle={activeStyle}
              >
                <i className="fas fa-envelope-open-text fs-5 me-1"></i> Contract
              </NavLink>
              <NavLink
                className="fw-bold text-decoration-none mx-4 text-dark d-flex align-items-center navbarDashboard"
                to="/dashboard"
              >
                <img
                  src="https://img.icons8.com/material/25/000000/dashboard-layout.png"
                  alt=""
                />
                <span className="ms-2">DASHBOARD</span>
              </NavLink>
            </Nav>
            <div style={{ fontFamily: "'Concert One', cursive" }}>
              <div className="d-inline me-4 profileImage">
                <span ref={ref}>
                  <img
                    onClick={handleClick}
                    width="50px"
                    className="border rounded-circle ms-3"
                    src={defaultUserImage}
                    alt=""
                  />
                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover id="popover-contained">
                      <Popover.Header className="px-5 border-0 bg-info text-center">
                        <span
                          style={{ fontFamily: "'Rubik', sans-serif" }}
                          className="ms-2 fs-5 text-light"
                        >
                          J.N.Erfan
                        </span>
                      </Popover.Header>
                      <Popover.Body>
                        <div className="text-center">
                          <img
                            width="120px"
                            className="ms-3 mb-4"
                            src={defaultUserImage}
                            alt=""
                          />
                          <span
                            style={{ fontFamily: "'Rubik', sans-serif" }}
                            className="fw-bold fs-6"
                          >
                            j.n.erfan420@gmail.com
                          </span>
                        </div>
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </span>
              </div>
              <NavLink to="login">
                <Button
                  variant="outline-dark rounded-pill px-4 me-4"
                  className="loginButton"
                >
                  LOGIN
                </Button>
              </NavLink>
              <Button
                variant="outline-danger rounded-pill px-4 me-4"
                className="loginButton"
              >
                LOG OUT
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBaar;
