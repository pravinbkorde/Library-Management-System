import React from 'react'
import axios from 'axios'
import '../assets/css/main.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/main.css'
export default function AvailableBooks() {
    
    const [Books, setBooks] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/books")
            .then((res) => {
                setBooks(res.data)
            }).catch("Error fetching data from books API")
    }, [])
    return (
        <><div className="container">
            <center> <h3 className='ms-5 fs-1 fw-bolder text-primary text-shadow'>Available Books</h3></center>
            <div className="row">
                {Books.map((value) => (
                    <div key={value.id} className="col-sm-3 mb-3 mb-sm-0 mt-3 shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="card border border-0">
                            <div className="card-body ">
                                <h5 className="card-title text-success">{value.book_name}</h5>
                                <p className="card-text text-danger-emphasis">{value.book_description}</p>
                                <p className='text-primary fw-medium'>Author: <em className='text-success fw-medium'>{value.author}</em> </p>
                                <Link to="/studentform" className="btn btn-primary fw-bold mx-2">RENT</Link>
                                <Link to={`/viewbook/${value.id}`} className="btn btn-primary fw-bold">VIEW</Link>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
        </>
    )
}
