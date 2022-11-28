import React from "react";

const Form = ({ book, setBook }) => {


    const handleChange = e => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    let { titulo, autor, edicao } = book

    const handleSubmit = () => {

        edicao = parseInt(edicao, 10)
        if (titulo === '' || autor === '' || edicao <= 0) {
            alert("Todos os campos devem ser preenchidos!")
            return
        }
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(book)
        }
        fetch('http://localhost:9000/api', requestInit)
            .then(res => res.text())
            .then(res => console.log(res))

        setBook({
            titulo: '',
            autor: '',
            edicao: 0
        })


    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Título</label>
                <input value={titulo} name="titulo" onChange={handleChange} type="text" id="Title" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Autor</label>
                <input value={autor} name="autor" onChange={handleChange} type="text" id="author" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="Edição" className="form-label">Edição</label>
                <input value={edicao} name="edicao" onChange={handleChange} type="number" id="edition" className="form-control" />
            </div>
            <button className="btn btn-primary">Enviar</button>

        </form>
    );
}

export default Form;