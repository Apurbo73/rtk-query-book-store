import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetBookQuery } from "../apiSlice/apiSlice";
import DetailView from "./DetailView";

const View = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError, isSuccess } = useGetBookQuery(id);
  let content = null;

  if (!isLoading && !isError && book.id) {
    content =  <div><DetailView book={book}></DetailView></div>
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default View;
