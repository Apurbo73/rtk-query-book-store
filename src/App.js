import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddBook from "./components/addBook/AddBook";
import View from "./components/View";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
