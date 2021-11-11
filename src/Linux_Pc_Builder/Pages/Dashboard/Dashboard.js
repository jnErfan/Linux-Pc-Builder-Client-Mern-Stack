import React from "react";
import { Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import AddDesktop from "../AddDesktop/AddDesktop";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const activeStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  return (
    <div style={{ marginTop: "100px" }} className="dashboardContainer">
      <Row xs={2} md={2} lg={2} className="container">
        <div
          className="col col-4 col-md-2 col-lg-2"
          style={{ borderRight: "2px solid #000" }}
        >
          <div className="">
            <NavLink
              activeStyle={activeStyle}
              className="d-block my-4 text-decoration-none dashboardNev px-2 py-2 rounded"
              to={`${url}/manageOrder`}
            >
              Manage Order
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-block my-4 text-decoration-none dashboardNev px-2 py-2 rounded"
              to={`${url}/manageProduct`}
            >
              Manage Product
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-block my-4 text-decoration-none dashboardNev px-2 py-2 rounded"
              to={`${url}/addDesktop`}
            >
              Add Desktop
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-block my-4 text-decoration-none dashboardNev px-2 py-2 rounded"
              to={`${url}/makeAdmin`}
            >
              Make Admin
            </NavLink>
          </div>
        </div>
        <div className="col col-8 col-md-10 col-lg-10">
          <div className="container">
            <Switch>
              <Route exact path={path}>
                <ManageAllOrder />
              </Route>
              <Route path={`${path}/manageOrder`}>
                <ManageAllOrder />
              </Route>
              <Route path={`${path}/manageProduct`}>
                <ManageProducts />
              </Route>
              <Route path={`${path}/addDesktop`}>
                <AddDesktop />
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
            </Switch>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;