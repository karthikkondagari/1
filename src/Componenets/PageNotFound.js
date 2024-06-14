import React from "react";
import { Link } from "react-router-dom";

const PageNoTFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template text-center">
            <h1>404</h1>
            <p className="lead">Oops! Page not found.</p>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <Link to="/" className="btn btn-danger btn-back">
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNoTFound;
