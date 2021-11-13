import React from "react";
import { Row } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { NavLink } from "react-router-dom";
import AdminRoute from "../../AdminRoute/AdminRoute";
import useAuth from "../../Hooks/useAuth";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddDesktop from "../AddDesktop/AddDesktop";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrder from "../MyOrder/MyOrder";
import OrderReview from "../OrderReview/OrderReview";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { users } = useAuth();
  const activeStyle = {
    backgroundColor: "#171751",
    color: "#fff",
  };

  console.log(users?.position);
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
          <div className="my-4">
            {/* Admin Switching */}
            {users?.position === "Admin" && (
              <>
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
              </>
            )}
            {/* Customer Switching */}

            {users?.position !== "Admin" && (
              <>
                <NavLink
                  activeStyle={activeStyle}
                  className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
                  to={`${url}/reviewOrder`}
                >
                  Review Orders
                </NavLink>
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
                  to={`${url}/review`}
                >
                  Review Here
                </NavLink>
                <NavLink
                  activeStyle={activeStyle}
                  className="d-inline-block my-2 text-decoration-none dashboardNev px-3 py-2 rounded"
                  to={`${url}/pay`}
                >
                  Payment Here
                </NavLink>
              </>
            )}
          </div>
        </div>
        <div className="col col-8 col-md-10 col-lg-10">
          <div className="container">
            <Switch>
              {/* Admin Routes */}
              <Route exact path={path}>
                <h1 className="text-center mt-4 mb-5">
                  Welcome To <span className="text-primary">Dashboard</span>
                </h1>
                {users?.position === "Admin" && <ManageAllOrder />}
              </Route>
              <AdminRoute path={`${path}/manageOrder`}>
                <ManageAllOrder />
              </AdminRoute>
              <AdminRoute path={`${path}/manageProduct`}>
                <ManageProducts />
              </AdminRoute>
              <AdminRoute path={`${path}/addDesktop`}>
                <AddDesktop />
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </AdminRoute>
              {/* Customer Routs */}
              <PrivateRoute path={`${path}/reviewOrder`}>
                <OrderReview />
              </PrivateRoute>
              <PrivateRoute path={`${path}/myOrder`}>
                <MyOrder />
              </PrivateRoute>
              <PrivateRoute path={`${path}/pay`}>
                <Pay />
              </PrivateRoute>
              <PrivateRoute path={`${path}/review`}>
                <Review />
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Dashboard;
