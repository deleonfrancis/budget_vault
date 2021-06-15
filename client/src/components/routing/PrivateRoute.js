import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({
  authReducer: { isAuthenticated, loading },
  children,
}) {
  return !isAuthenticated && !loading ? (
    <Redirect to="/login" />
  ) : (
    <Route>{children}</Route>
  );
}

const mapStateToProps = (state) => ({
  authReducer: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
