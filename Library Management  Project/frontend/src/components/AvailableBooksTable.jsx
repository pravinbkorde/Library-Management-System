import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../assets/css/main.css'
export default function AvailableBooksTable() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8]
    const [Book, setBook] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/books")
            .then((res) => {
                setBook(res.data)
            }).catch("Book Fetching error")
    }, [])
    console.log(Book)
    return (
        <>
            <div className="container">
                <center> <h3 className='ms-5 mt-3 text-shadow fs-1 fw-bolder text-primary'>Available Books</h3></center>
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Auther</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {Book.map((value) => (
                            <tr key={value.id} className='shadow p-3 mb-5 bg-body-tertiary rounded'>
                                <th scope="row">{value.id}</th>
                                <th scope="row">{value.book_name}</th>
                                <td className='p-3'>{value.author}</td>
                                <td style={{ width: "700px" }}>{value.book_description}</td>
                                <td><button className='btn btn-sm bg-success fw-medium'><Link to="/studentform/" className='text-white text-decoration-none'>RENT</Link></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
