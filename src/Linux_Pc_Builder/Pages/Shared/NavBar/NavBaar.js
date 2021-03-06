import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Popover,
  Overlay,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import "./Navbaar.css";

const NavBaar = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const [cartProduct, setCartProduct] = useState({});
  const [cartUpdate, setCartUpdate] = useState("");
  const ref = useRef(null);

  const activeStyle = {
    borderBottom: "5px solid rgb(45, 45, 45)",
  };
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const [scrollChange, setSrollChainge] = useState(false);

  const onScrollHeader = () => {
    window.scrollY >= 10 ? setSrollChainge(true) : setSrollChainge(false);
  };
  const [remove, setRemove] = useState(false);

  const removeHandler = () => {
    setRemove(true);
  };
  window.addEventListener("scroll", onScrollHeader);

  const { user, logOutAll, users } = useAuth();

  //  Get Cart Length For Navbar Showing
  useEffect(() => {
    fetch(`https://linux-pc-builder-backend.herokuapp.com/addToCartOrder?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCartProduct(data);
        setCartUpdate(data);
      });
  }, [cartUpdate, user.email]);
  return (
    <div>
      <div
        onClick={removeHandler}
        style={{ cursor: "pointer" }}
        className={!remove ? "clickRemove responsive" : "d-none"}
      >
        <img width="100%" src="https://i.ibb.co/6v6wtGR/navbarimg.png" alt="" />
      </div>
      <Navbar
        fixed="top"
        className={
          scrollChange ? "navbarContainer" : "bg-transparent navbarContainerRes"
        }
        id={!scrollChange && !remove && "displayMargin"}
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
                className="fw-bold text-decoration-none mx-3  navbarButton"
                to="/home"
                activeStyle={activeStyle}
              >
                <i className="fas fa-laptop-house fs-5 me-1"></i> Home
              </NavLink>
              <NavLink
                className="fw-bold text-decoration-none mx-3  navbarButton"
                to="/allPcCollection"
                activeStyle={activeStyle}
              >
                <i className="fas fa-desktop  fs-5 me-1"></i>Desktop
              </NavLink>
              <NavLink
                className="fw-bold text-decoration-none mx-3  navbarButton"
                to="/Blogs"
                activeStyle={activeStyle}
              >
                <i className="fab fa-slack fs-5 me-1"></i> Blogs
              </NavLink>
              <NavLink
                className="fw-bold text-decoration-none mx-3  navbarButton"
                to="/contract"
                activeStyle={activeStyle}
              >
                <i className="fas fa-envelope-open-text fs-5 me-1"></i> Contract
              </NavLink>
              {user?.displayName && (
                <>
                  <NavLink
                    className="fw-bold text-decoration-none mx-3 text-dark d-flex align-items-center navbarDashboard animate__animated animate__pulse  animate__slow animate__infinite"
                    to="/dashboard"
                  >
                    <img
                      src="https://img.icons8.com/material/25/000000/dashboard-layout.png"
                      alt=""
                    />
                    <span className="ms-2">DASHBOARD</span>
                  </NavLink>
                </>
              )}
              {user?.displayName && users?.position !== "Admin" && (
                <NavLink
                  className="fw-bold text-decoration-none mx-3 ms-4 text-dark d-flex align-items-center navbarDashboard animate__animated animate__pulse   animate__infinite"
                  to="/dashboard/reviewOrder"
                >
                  <i className="fas fa-cart-arrow-down fs-2"></i>{" "}
                  <span
                    className="bg-danger  rounded-circle text-white text-center"
                    style={{
                      position: "absolute",
                      height: "22px",
                      width: "22px",
                      marginLeft: "25px",
                      marginBottom: "25px",
                    }}
                  >
                    {cartProduct?.length || 0}
                  </span>
                </NavLink>
              )}
            </Nav>
            <div style={{ fontFamily: "'Concert One', cursive" }}>
              {user?.displayName && (
                <div className="d-inline me-4 profileImage">
                  <span ref={ref}>
                    <img
                      onClick={handleClick}
                      width="50px"
                      height="50px"
                      className="border rounded-circle ms-3"
                      src={user?.photoURL}
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
                            {user?.displayName}
                          </span>
                        </Popover.Header>
                        <Popover.Body>
                          <div className="text-center">
                            <img
                              width="120px"
                              className="ms-3 mb-4 rounded-circle"
                              src={user?.photoURL}
                              alt=""
                            />
                            <span
                              style={{ fontFamily: "'Rubik', sans-serif" }}
                              className="fw-bold fs-6"
                            >
                              {user?.email}
                            </span>
                          </div>
                        </Popover.Body>
                      </Popover>
                    </Overlay>
                  </span>
                </div>
              )}
              {!user?.displayName && (
                <NavLink to="/login">
                  <Button
                    variant="outline-dark rounded-pill px-4 me-4"
                    className="loginButton"
                  >
                    LOGIN
                  </Button>
                </NavLink>
              )}
              {user?.displayName && (
                <Button
                  onClick={logOutAll}
                  variant="outline-danger rounded-pill px-4 me-4"
                  className="loginButton"
                >
                  LOG OUT
                </Button>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBaar;
