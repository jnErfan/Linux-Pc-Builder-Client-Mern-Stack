import React from "react";
import { Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import AdminLogin from "../../LoginMethod/AdminLogin/AdminLogin";
import AddDesktop from "../AddDesktop/AddDesktop";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrder from "../MyOrder/MyOrder";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const activeStyle = {
    backgroundColor: "#000",
    color: "#fff",
  };
  return (
    <div style={{ marginTop: "100px" }} className="dashboardContainer">
      <Row xs={2} md={2} lg={2} className="mx-0">
        <div
          className="col col-4 col-md-2 col-lg-2"
          style={{
            borderRight: "2px solid #171741",
            backgroundColor: "#2E2E66",
          }}
        >
          <div className="">
            {/* Admin Switching */}
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
              to={`${url}/manageOrder`}
            >
              Manage Order
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded fw-bold"
              to={`${url}/manageProduct`}
            >
              <small> Manage Product</small>
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
              to={`${url}/addDesktop`}
            >
              Add Desktop
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
              to={`${url}/makeAdmin`}
            >
              Make Admin
            </NavLink>
            {/* Customer Switching */}
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
              to={`${url}/myOrder`}
            >
              My Order
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
              to={`${url}/pay`}
            >
              Payment Here
            </NavLink>
            <NavLink
              activeStyle={activeStyle}
              className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
              to={`${url}/review`}
            >
              Review
            </NavLink>
          </div>
        </div>
        <div className="col col-8 col-md-10 col-lg-10">
          <div className="container">
            <Switch>
              {/* Admin Routes */}
              <Route exact path={path}>
                <h1 className="text-center mt-4">Welcome To Dashboard</h1>
                <AdminLogin />
                {/* <ManageAllOrder /> */}
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
              {/* Customer Routs */}
              <Route path={`${path}/myOrder`}>
                <MyOrder />
              </Route>
              <Route path={`${path}/pay`}>
                <Pay />
              </Route>
              <Route path={`${path}/review`}>
                <Review />
              </Route>
            </Switch>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
