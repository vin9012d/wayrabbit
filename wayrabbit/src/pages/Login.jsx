import React, { useState } from 'react'
import styles from "./Signup.module.css";
import axios from 'axios';
import { useDispatch ,useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
import { loginWatch } from '../redux/authreducer/action';
import Navbar from '../components/Navbar';
export const Login = () => {

    const [data, setData] = useState({
  
        email: "",
        password:""
    })
    
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        console.log(data,'data')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
            dispatch(loginWatch(data)).then((r) => {
                if (r.type == "LOGIN_SUCCESS") {
                    navigate("/dashboard")
                }
            })
      
        console.log('inside submit')
 
         //below code is just for testing purpose created
        
        axios.post("https://young-brook-10850.herokuapp.com/login", data).then((res) => {
            console.log(res.data, 'data')
        
        }).catch((err) => console.log(err, 'err'))
        
        

}

  return (
      <div>
          <Navbar />
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
