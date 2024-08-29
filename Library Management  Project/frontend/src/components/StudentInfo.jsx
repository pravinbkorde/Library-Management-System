import React from 'react'
import '../assets/css/main.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
export default function StudentInfo() {

  const [FullName, setFullName] = useState("")
  const [BookName, setBookName] = useState("")
  const [Prn, setPrn] = useState("")
  const [Division, setDivision] = useState("")
  const [Phone, setPhone] = useState(0)
  const [Email, setEmail] = useState("")
  const [Adress, setAdress] = useState("")
  const [Pravin, setPravin] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/student/studentapi/Students")
      .then((res) => {
        setPravin(res.data)
      }).catch("Error fetching student info")
  }, [])
  const handleSubmit = async (e) => {
    const studentData = {
      student_name: FullName,
      book_name: BookName,
      student_prn: Prn,
      student_class: Division,
      student_phone: Phone,
      student_email: Email,
      student_address: Adress
    };
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/student/studentapi/Students",studentData,{
        headers:{
          'Content-Type': 'application/json',
        },
      });
      console.log(res.data)
    } catch (error) {
      console.error("Student API fetching",error)
    }
  }
  return (
    <>
      <div className="container mt-5 text-dark formclass p-3">
        <center><h2 className="mb-4">Student Information Form</h2></center>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row">
            <label htmlFor="fullName" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="fullName" placeholder="John Doe"
                required
                value={FullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="Bookname" className="col-sm-2 col-form-label">Book Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="Bookname" placeholder="name of the book"
                required
                value={BookName}
                onChange={(e) => setBookName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
          </div>

          <div className="mb-3 row">
            <label htmlFor="studentId" className="col-sm-2 col-form-label">Student PRN</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="studentId" placeholder="123456"
                required
                value={Prn}
                onChange={(e) => setPrn(e.target.value)}
              />
            </div>
            <label htmlFor="gradeLevel" className="col-sm-2 col-form-label">Class</label>
            <div className="col-sm-4">
              <input type="text" className="form-control" id="gradeLevel" placeholder="ex-BE(Computer Engineerin)"
                required
                value={Division}
                onChange={(e) => setDivision(e.target.value)}
              />
            </div>
          </div>


          <div className="mb-3 row">
            <label htmlFor="phoneNumber" className="col-sm-2 col-form-label">Phone Number</label>
            <div className="col-sm-4">
              <input type="tel" className="form-control" id="phoneNumber" placeholder="(123) 456-7890"
                required
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <label htmlFor="email" className="col-sm-2 col-form-label">Email Address</label>
            <div className="col-sm-4">
              <input type="email" className="form-control" id="email" placeholder="email@example.com"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="address" className="col-sm-2 col-form-label">Home Address</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="address" placeholder="123 Main St, City, State, ZIP"
                required
                value={Adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
