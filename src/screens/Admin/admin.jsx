import React, { useState } from 'react'
import { Card, CardContent } from '../../components/Card/Card'
import { Input } from '../../components/input/Input'
import { Button } from "../../components/button/Button.jsx"
import { ResponseCard } from "../../components/responseCard/ResponseCard.jsx"
import { useNavigate } from "react-router";
import axios from "axios"
import "./admin.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/footer.jsx'
const Admin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    secretPassword: ""
  });
  const [popUp, setPopUp] = useState(false)
  const [popUpMessage, setPopUpMessage] = useState("")
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.post("https://feedback-project-backend.onrender.com/AddAdmin/add-admin", formData)
    .then((response)=>{
      if(response){
        navigate("/get-feedbacks")
      }
    }).catch((error)=>{
        setPopUpMessage("Error: Something went wrong. Please try again.")
        setPopUp(true)
    })
  };
  return (
    <>
    <Navbar />  {/* Navbar always at the top */}
  
    <Card className="card">
      <CardContent>
        <h2 className="feedback">Admin Signup</h2>
        <form onSubmit={handleSubmit} className="submit-form">
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="new-email-input"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="password-input"
            required
          />
          <Input
            type="password"
            name="secretPassword"
            placeholder="Secret Password"
            value={formData.secretPassword}
            onChange={handleChange}
            className="secret-password-input"
            required
          />
          <Button type="submit">Sign up</Button>
        </form>
  
        {popUp && (
          <ResponseCard 
            popUp={popUp}
            onClick={() => setPopUp(false)}
            data={popUpMessage}
            className='response-card'
          />
        )}
      </CardContent>
    </Card>
    <Footer/>
  </>
  )
}

export default Admin;