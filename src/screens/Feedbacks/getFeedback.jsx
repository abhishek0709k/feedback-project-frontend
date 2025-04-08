import axios from "axios"
import React, { useEffect, useState } from 'react'
import "./getFeedback.css"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/footer"
function GetFeedback() {
  const [response, setResponse] = useState([])
  useEffect(()=>{
    axios.get("https://feedback-project-backend.onrender.com/GetFeedBack/get-feedbacks")
    .then((response)=>{
        setResponse(response.data)
    }).catch((error)=>{
        return <div>Something went wrong {error}</div>
    })
  }, [])
  return (
    <>
    <Navbar/>
    <div className="feedbackes">
        <h2 className="feedback-h2" >All Feed Backs</h2>
        {
            response.map((eachResponse)=>(
                <div className="each-feedback" key={eachResponse._id}>
                    <p className="full-name">Full name: {eachResponse.fullName}</p>
                    <p className="feedback-text"><strong>Feedback: {eachResponse.feedback}</strong></p>
                </div>
            ))
        }
    </div>
    <Footer/>
    </>
  )
}

export default GetFeedback;