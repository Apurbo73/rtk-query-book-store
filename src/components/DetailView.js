import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteBookMutation } from "../apiSlice/apiSlice";

const DetailView = ({ book }) => {
  const { name, thumbnail, author, price, id } = book;
  const navigate = useNavigate();
  const [deleteBook, { isLoading, isSuccess }] = useDeleteBookMutation(id);
  //handle Delete:
  const handleDelete = () => {
    deleteBook(id);
  };
  useEffect(() => {
    {
      isSuccess && navigate("/");
    }
  }, []);
  return (
    <div>
      <div className="card mt-5 mx-auto" style={{ width: "15rem" }}>
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
            <Link className="btn btn-danger w-100 m-1" onClick={handleDelete}>
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
