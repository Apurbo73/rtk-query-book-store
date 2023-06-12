import React from "react";
import Book from "./Book";
import { useGetBooksQuery } from "../apiSlice/apiSlice";

const Books = () => {
  const { data: books, isLoading, isError, error } = useGetBooksQuery();
  // decide what to render:
  let content = null;
  if (isLoading) {
    content = <h1>Loading....</h1>;
  }
  if (!isLoading && isError) {
    content = <h1>Something went wrong....</h1>;
  }
  if (!isLoading && !isError && books.length === 0) {
    content = <h1>No Books Found.......</h1>;
  }
  if (!isLoading && !isError && books.length > 0) {
    content = books.map(book => <Book key={book.id} book={book} />);
  }
  return (
    <div className="d-flex flex-wrap">
      {content}
    </div>
  );
};

export default Books;
