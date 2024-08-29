import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Ranted() {

    const [Students, setStudents] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/student/studentapi/Students")
            .then((res) => {
                setStudents(res.data)
            }).catch("Ranted components error")
    }, [])
    return (
        <>
            <div className="container mt-5">
                <center> <h2>RENTED BOOKS</h2></center>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">STUDENT NAME</th>
                            <th scope="col">BOOK NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PHONE</th>
                            <th scope="col">ISSUED DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Students.map((value) => (
                            <tr key={value.id}>
                                <th scope="row">{value.id}</th>
                                <td>{value.student_name}</td>
                                <td>{value.book_name}</td>
                                <td>{value.student_email}</td>
                                <td>{value.student_phone}</td>
                                <td>{value.rent_date}</td>
                                <button className='btn btn-sm bg-info fw-bold'><Link to={`/detailstudent/${value.id}`} className='text-decoration-none text-white'>VIEW</Link></button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
