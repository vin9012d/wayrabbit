import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { getWatchData } from '../redux/appreducer/action'

export const Dashboard = () => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(Infinity)
  const [user,setUser]=useState([])
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Appreducer.watches)
  const totalPage = useSelector((store) => store.Appreducer.total)
 
  // if (data!==undefined  && user?.length == 0) {
  //     console.log(data,'data in userpage')
  //   setTotal(data.total)
  // setUser(data.data)
  // }
 
  
  console.log(data,'data in userpage')
    
  useEffect(() => {
    if(data.length==0){

      dispatch(getWatchData(page))
    }
  

  }, [page,data])

  useEffect(() => {
    
    if (user.length == 0) {
      setUser(data)
     console.log(totalPage)
      setTotal(totalPage)
 }

  }, [data])
  
  useEffect(() => {

 dispatch(getWatchData(page))
   setUser(data)
 
  }, [page])
  
  useEffect(() => {


   setUser(data)
 
  },[page,data])

  console.log(user,'user')
  return (
    <div >
      <Navbar />
      
      <button onClick={(e)=>setPage((page)=>page-1)} disabled={page===1}>Prev</button>
      <span>{ page}</span>
      <button onClick={(e)=>setPage((page)=>page+1)} disabled={page===total}>Next</button>
   
      
      {user?.length > 0 && user.map((item) => (
        <div style={{marginTop:"20px"}} key={item.id}>
          <img src={item.avatar} />
          <p>{ item.email}</p>


        </div>  
      ))}
      

    </div>
  )
}
