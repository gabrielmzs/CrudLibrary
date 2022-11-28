import React from "react";

const BookList = ({ book, books, setBook, setListUpdated }) => {

    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE',
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setListUpdated(true)
    }

    let { titulo, autor, edicao } = book

    const handleUpdate = id => {

        edicao = parseInt(edicao, 10)
        if (titulo === '' || autor === '' || edicao <= 0) {
            alert("Todos os campos devem ser preenchidos!")
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api/' + id, requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setBook({
            titulo: '',
            autor: '',
            edicao: 0
        })

        setListUpdated(true)
    }






    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Edição</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.titulo} </td>
                        <td>{book.autor}</td>
                        <td>{book.edicao}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Deletar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={() => handleUpdate(book.id)} className="btn btn-warning">Alterar</button>
                            </div>
                        </td>

                    </tr>
                ))}

            </tbody>
        </table>
    );
}

export default BookList;