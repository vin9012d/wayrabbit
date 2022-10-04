import React, { useState } from 'react'
import styles from "./Signup.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { addWatchData, getWatchData } from '../redux/appreducer/action';
import { useDispatch } from 'react-redux';
export const Addnew = () => {

    const [data, setData] = useState({
        name: "",
        job: "",
      
    })
    
    const navigate = useNavigate()
    const dispatch=useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        // console.log(data,'data')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('inside submit')
        e.preventDefault();
        dispatch(addWatchData(data))
          
        navigate("/dashboard")
         
       

        // axios.post("https://young-brook-10850.herokuapp.com/signup", data).then((res) => {
        //     // console.log(res.data, 'data')
        //     alert("Sucessfully Signed up")
        //     navigate("/login")
        // }).catch((err) => {
        //     alert("Something went wrong please try again later")
        //     console.log(err, 'err')
        // })
        
        

}

  return (
      <div>
          <Navbar />

          <h1>Add new user data here</h1>

          <div className={styles.formdiv}>
              <form onSubmit={handleSubmit} >
              

              <input onChange={handleChange} value={data.name} name='name' placeholder='Enter Your Name' required /><br />

              <input  onChange={handleChange} name='job' value={data.email} placeholder='Enter Your job'required /><br />

             

              <button className={styles.formbutton} type='submit'>Adddata</button>

          </form>

          </div>


    </div>
  )
}
