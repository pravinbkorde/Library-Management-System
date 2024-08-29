import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
export default function ViewBook() {
    const [Book, setBook] = useState([])
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/books/${id}`)
            .then((res) => {
                setBook(res.data)
            }).catch("Error")
    }, [])

    console.log(Book)
    return (
        <> <div class="card text-center m-5 bg-dark text-white">
            <div class="card-body">
                <h5 class="card-title">{Book.book_name}</h5>
                <p class="card-text">{Book.book_description}</p>
                <p class="card-text">Author: <em>{Book.author}</em></p>
            </div>
            <div class="card-footer text-body-secondary">
                <Link to="/" class="btn btn-sm bg-success text-white">Button</Link>
            </div>
        </div>

        </>
    )
}
