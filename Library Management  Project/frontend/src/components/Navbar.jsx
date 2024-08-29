import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <>
            <nav className='bg-danger'>
                <nav className="navbar navbar-expand-lg bg-body-success">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-warning fs-3 fw-bolder" to="/">Library <em className='fw-medium fs-5 text-white'>Management</em></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse position-relative" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 position-absolute top-0 start-50 translate-middle">
                                <li className="nav-item me-4 fw-bold">
                                    <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
                                </li>
                                <li className="nav-item me-4 fw-bold">
                                    <Link className="nav-link text-white" aria-disabled="true" to="/addbook">Add Book</Link>
                                </li>
                                <li className="nav-item me-4 fw-bold">
                                    <Link className="nav-link text-white" to="/ranted">Rented Books</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}
