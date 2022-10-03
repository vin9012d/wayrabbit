import React, { useState } from 'react'
import styles from "./Signup.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const Login = () => {

    const [data, setData] = useState({
  
        email: "",
        password:""
    })
    
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log(data,'data')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('inside submit')
 

        axios.post("https://young-brook-10850.herokuapp.com/login", data).then((res) => {
            console.log(res.data, 'data')
        
        }).catch((err) => console.log(err, 'err'))
        
        

}

  return (
      <div>
          <h1>Login from</h1>

          <div className={styles.formdiv}>
              <form onSubmit={handleSubmit} >
              

             

              <input type='email' onChange={handleChange} name='email' value={data.email} placeholder='Enter Your Email'required /><br />

              <input type='password' onChange={handleChange} name='password' placeholder='Enter Your Password' value={data.password} required/><br />

              <button className={styles.formbutton} type='submit'>Login</button>

          </form>

          </div>


    </div>
  )
}
