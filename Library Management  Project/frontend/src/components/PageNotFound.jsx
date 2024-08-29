import React from 'react'
import '../assets/css/notfound.css'
import { Link } from 'react-router-dom'
export default function PageNotFound() {
  return (
    <>
        <div className="bg-404">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="error-code text-primary">404</div>
                    <div className="error-message">Oops! The page you are looking for does not exist.</div>
                    <p>It might have been removed, renamed, or did not exist in the first place.</p>
                    <Link to="/" className="btn btn-primary btn-home fw-medium">Home</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
