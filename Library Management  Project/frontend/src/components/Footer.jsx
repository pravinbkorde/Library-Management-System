import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <>
            <footer className="text-dark pt-4 m-5 shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="text-uppercase">About Us</h5>
                            <p className="text-muted">
                                Our Library Management System provides users with Link robust platform for managing and accessing Link vast collection of books and resources. We aim to foster Link community of knowledge and learning.
                            </p>
                        </div>

                        <div className="col-md-4">
                            <h5 className="text-uppercase">Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><Link to="/" className="text-dark">Home</Link></li>
                                <li><Link to="/" className="text-dark">Catalog</Link></li>
                                <li><Link to="/" className="text-dark">My Account</Link></li>
                                <li><Link to="/" className="text-dark">Contact Us</Link></li>
                                <li><Link to="/" className="text-dark">Help</Link></li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h5 className="text-uppercase">Contact Us</h5>
                            <p><i className="bi bi-geo-alt-fill"></i> 123 Library Lane, Knowledge City</p>
                            <p><i className="bi bi-telephone-fill"></i> +1 234 567 890</p>
                            <p><i className="bi bi-envelope-fill"></i> library@management.com</p>
                            <div>
                                <Link to="/" className="text-white me-2"><i className="bi bi-facebook"></i></Link>
                                <Link to="/" className="text-white me-2"><i className="bi bi-twitter"></i></Link>
                                <Link to="/" className="text-white"><i className="bi bi-instagram"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col text-center">
                            <p className="text-muted mb-0">&copy; 2024 Library Management System. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
