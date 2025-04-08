import React from 'react'
import { useState, useEffect } from "react"
import { Card, CardContent } from "../../components/Card/Card.jsx"
import { Button } from "../../components/button/Button.jsx"
import { Input } from "../../components/input/Input.jsx"
import { Textarea } from "../../components/textArea/Textarea.jsx"
import { Switch } from "../../components/switch/Switch.jsx"
import { ResponseCard } from "../../components/responseCard/ResponseCard.jsx"
import axios from "axios";
import "./AddFeedBack.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/footer.jsx'
function AddFeedback() {
  const [theme, setTheme] = useState("dark");
  const [popUp, setPopUp] = useState(false)
  const [popUpMessage, setPopUpMessage] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    feedback: "",
  });
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/AddFeedBack/add-feedback", formData)
    .then((response)=>{
      if(response){
        setPopUpMessage("Thanks for giving your useful feedback to us!")
        setPopUp(true)
        setFormData({
            fullName:"",
            email:"",
            feedback:""
        })
      }
    }).catch((error)=>{
      setPopUpMessage("Error: All fields are required. Please try again.")
      setPopUp(true)
    })
  };
  return (
    <div className="">
      <Navbar />
      <div className="toggle-handler">
        <Switch checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}/>
      </div>

      <Card className="card">
        <CardContent>
          <h2 className="feedback">Feedback Form</h2>
          <form onSubmit={handleSubmit} className="submit-form">
            <Input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="fullname-input"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="email-input"
              required
            />
            <Textarea
              name="feedback"
              placeholder="Your Feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows={5}
              className="feedback-input"
              required
            />
            <Button type="submit" className="">Submit Feedback</Button>
          </form>
        </CardContent>
        {
        popUp && 
        <ResponseCard 
          popUp={popUp}
          onClick={()=>{ setPopUp(false) }} 
          data={popUpMessage} 
          className="new-response-card"/>
      }
      </Card>
      <Footer />
    </div>
  )
}

export default AddFeedback