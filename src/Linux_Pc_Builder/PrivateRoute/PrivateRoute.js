import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
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
  //  This Route Only Customers
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
