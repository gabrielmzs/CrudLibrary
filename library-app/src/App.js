import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import BookList from "./components/BookList";
import Form from "./components/form";

function App() {

  const [book, setBook] = useState({
    titulo: '',
    autor: '',
    edicao: 0
  })

  const [books, setBooks] = useState([])

  const [listUpdated, setListUpdate] = useState(false)

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:9000/api')
        .then(res => res.json())
        .then(res => setBooks(res))
    }
    getBooks()
    setListUpdate(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Library App' />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Lista de Livros</h2>
            <BookList book={book} setBook={setBook} books={books} setListUpdated={setListUpdate} />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Adicionar Livros</h2>
            <Form book={book} setBook={setBook} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}



export default App;