import React from "react";
import ReactDOM from "react-dom";
import books from "./books";
import Book from "./Book";


//CSS
import "./index.css";

// Setup Vars


function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}



ReactDOM.render(<Booklist />, document.getElementById("root"));
