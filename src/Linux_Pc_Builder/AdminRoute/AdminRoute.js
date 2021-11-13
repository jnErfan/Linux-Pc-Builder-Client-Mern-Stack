import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, users, isLoading } = useAuth();
  if (isLoading) {
    return (
      <div
        className="text-center"
        style={{ marginTop: "200px", marginBottom: "200px" }}
      >
        <Spinner
          animation="border"
          variant="secondary"
          style={{ padding: "100px" }}
        />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && users?.position === "Admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
