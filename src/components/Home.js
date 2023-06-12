import React from "react";
import Books from "../books/Books";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-end">
        <div className="btn btn-primary p-1 mb-4 ">
          <Link style={{textDecoration:"none"}} className="text-light" to="/books/add">
            Add Book (+)
          </Link>
        </div>
      </div>
      <Books />
    </div>
  );
};

export default Home;
