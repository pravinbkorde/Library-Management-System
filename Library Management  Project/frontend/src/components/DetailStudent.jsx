import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function DetailStudent() {
  const { id } = useParams()
  const [Std, setStd] = useState([])



  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/student/studentapi/Students/${id}`)
      .then((res) => {
        setStd(res.data)
      }).catch((error) => {
        console.error("Student api in DetailedStudent component", error)
      })
  }, [])
  console.log(Std)
  return (
    <>
      <div className=''>

        <div className="container mt-5 text-dark formclass p-3 shadow p-3 mb-5 bg-body-tertiary rounded">
          <center><h2 className="mb-4">Student Information Form</h2></center>
          <form>

            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.student_name}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Book Name</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.book_name}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">PRN Number</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.student_prn}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Class</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.student_class}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Phone No</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.student_phone}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.student_email}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Address</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.student_address}
                </div>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="fullName" className="col-sm-2 col-form-label">Date</label>
              <div className="col-sm-10">
                <div class="h6 pb-2 mb-4 text-success border-bottom border-success">
                  {Std.rent_date}
                </div>
              </div>
            </div>
            
        <button className="btn btn-sm bg-info "><Link to={`/sendmail/${id}`} className='text-white fw-bold text-decoration-none'>Send Reminder</Link></button>
          </form>
        </div>
      </div>
    </>
  )
}
