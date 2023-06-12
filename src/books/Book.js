import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Book = ({ book }) => {
  const { name, id, thumbnail, price, author } = book;
  return (
    <div>
      <ToastContainer />
      <div className="card m-2" style={{ width: "13rem" }}>
        <img
          style={{ height: 230 }}
          src={thumbnail}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title text-center">
            {name}
          </h6>
          <p className="card-text text-center">
            Author : {author}
          </p>
          <p className="card-text text-center">
            Price: {price}$
          </p>
          <div className="d-flex">
            <Link to={`/books/${id}`} className="btn btn-dark w-50 m-1">
              View
            </Link>
            <Link className="btn btn-danger w-50 m-1">Delete</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
