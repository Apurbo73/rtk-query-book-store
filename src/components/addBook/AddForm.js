import React, { useState } from "react";
import { useAddBookMutation } from "../../apiSlice/apiSlice";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddForm = () => {
  const [addBook, { isLoading, isError, error }] = useAddBookMutation();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  //handle Submit:
  const handleSubmit = e => {
    e.preventDefault();
    addBook({
      name,
      author,
      price,
      thumbnail
    });
    toast(`New Book ${name} Is Successfully Added...`);
    resetForm();
  };

  const resetForm = () => {
    setAuthor("");
    setName("");
    setPrice("");
    setThumbnail("");
  };
  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            placeholder="Enter Book Title"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={thumbnail}
            onChange={e => {
              setThumbnail(e.target.value);
            }}
            placeholder="Enter Book Thumbnail"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            value={author}
            onChange={e => {
              setAuthor(e.target.value);
            }}
            placeholder="Enter Author Name"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
            placeholder="Enter Price"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>

      <Link to="/" type="submit" className="btn btn-danger w-100 mt-2">
        Back To Home
      </Link>
    </div>
  );
};

export default AddForm;
