import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function Sendemail() {
    const [sudentData, setsudentData] = useState([])
    const { id } = useParams()
    const [Recipents, setRecipents] = useState("")
    const [Subject, setSubject] = useState("")
    const [Message, setMessage] = useState("")
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/student/studentapi/Students/${id}`)
        .then((res) => {
            setsudentData(res.data)
        }).catch((error) => {
            console.error("Student api fetch data", error)
        })
    }, [])
    
    console.log(Recipents)
    
    const handlesubmit =async(e)=>{
        const EmailData= {
            recipient:Recipents,
            subject:Subject,
            message:Message
        }
        e.preventdefault();
        try {
            const result = await axios.post("http://127.0.0.1:8000/sendemail/send/",EmailData,{
              headers:{
                'Content-Type': 'application/json',
              },
            });
            console.log(EmailData)
          } catch (error) {
            console.error("Email API fetching",error)
          }

    }

    
    console.log(sudentData)
    return (
        <>
            <div className="container w-50 mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
            <center><h3>Send Email</h3></center>
                <form>
                <div class="mb-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Recipent`s Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                         value={Recipents}
                         onChange={(e)=>setRecipents(e.target.value)}
                         
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Subject</label>
                    <input type="text" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com" 
                        value={Subject}
                        onChange={(e)=>setSubject(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={Message}
                    onChange={(e)=>setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
