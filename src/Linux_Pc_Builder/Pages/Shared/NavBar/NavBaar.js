import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbaar.css";

const NavBaar = () => {
  const activeStyle = {
    borderBottom: "5px solid rgb(45, 45, 45)",
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
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
            <div>
              <NavLink to="login">
                <Button
                  variant="outline-dark rounded-pill px-4 me-4"
                  className="loginButton"
                >
                  Login
                </Button>
              </NavLink>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBaar;
