import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function AddBook() {

    const [name, setname] = useState("");
    const [AutherName, setAutherName] = useState("")
    const [Desc, setDesc] = useState("")

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const eventData={
            book_name:name,
            author:AutherName,
            book_description :Desc,
        };
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/books",eventData,{
                headers:{
                    'Content-Type': 'application/json',
                },
            });
            console.log("Event Created",res.data)
        } catch (error) {
            console.error('There was an error creating the event!', error)
        }
    }
  return (
    <>
      <div className="container mt-5 text-dark shadow p-3 mb-5 bg-body-tertiary rounded">
        <center><h2 className="mb-4">Add New Book</h2></center>
        <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
                <label for="bookTitle" className="col-sm-2 col-form-label">Book Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="bookTitle" placeholder="Enter book title" 
                    required
                    value={name}
                    onChange={(e)=>setname(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="author" className="col-sm-2 col-form-label">Author</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="author" placeholder="Enter author's name" 
                    required
                    value={AutherName}
                    onChange={(e)=>setAutherName(e.target.value)}
                    />
                </div>
            </div> <div className="mb-3 row">
                <label for="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea className="form-control" id="description" rows="4" placeholder="Enter book description" 
                    required
                    value={Desc}
                    onChange={(e)=>setDesc(e.target.value)}
                    ></textarea>
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-sm-10 offset-sm-2">
                    <button type="submit" className="btn btn-success fw-bold">Add Book</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}
