import React, { useState } from 'react'
import styles from "./Signup.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
export const Signup = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        password:""
    })
    
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        // console.log(data,'data')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('inside submit')
 

        axios.post("https://young-brook-10850.herokuapp.com/signup", data).then((res) => {
            // console.log(res.data, 'data')
            alert("Sucessfully Signed up")
            navigate("/login")
        }).catch((err) => {
            alert("Something went wrong please try again later")
            console.log(err, 'err')
        })
        
        

}

  return (
      <div>
          <Navbar />

          <h1>Signup from</h1>

          <div className={styles.formdiv}>
              <form onSubmit={handleSubmit} >
              

              <input onChange={handleChange} value={data.name} name='name' placeholder='Enter Your Name' required /><br />

              <input type='email' onChange={handleChange} name='email' value={data.email} placeholder='Enter Your Email'required /><br />

              <input type='password' onChange={handleChange} name='password' placeholder='Enter Your Password' value={data.password} required/><br />

              <button className={styles.formbutton} type='submit'>Signup</button>

          </form>

          </div>


    </div>
  )
}
