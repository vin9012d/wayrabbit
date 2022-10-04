import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { getWatchData } from '../redux/appreducer/action'

export const Dashboard = () => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(Infinity)
  const [user, setUser] = useState([])
  const [query,setQuery]=useState("")
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Appreducer.watches)
  const totalPage = useSelector((store) => store.Appreducer.total)
 

  
  const handleSort = (e) => {
    console.log(e.target.value)
    let type = e.target.value;
    let temp=[...user]
    if (type == "inc"){
      temp.sort((a, b) => a.id - b.id)
      setUser(temp)
    }
    if (type == "dec"){
      temp.sort((a, b) => b.id - a.id)
      setUser(temp)
    }
    

  }

  const handleQuery = (e) => {
    let text = e.target.value;
    console.log(text,'text')
    let temp = [...user];
  
    let data = temp.filter((item) => {
      console.log(item.email.includes(text))
      console.log(item)
      if (item.email.includes(text)) {
        return item;
     }
    })

  setUser(data)

    console.log(data,'data')
    

  }
 
  
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
   <div>
      <input onChange={handleQuery} style={{marginTop:"20px", marginBottom:"20px", fontSize:"18px" }} placeholder='Search'/>
      </div>

      <div>
        <input name='sorting' onClick={handleSort} value='inc' type='radio' /> <label>Increment</label>
        <input name='sorting' onClick={handleSort} value='dec' type='radio' /><label>Decrement</label>
      </div>

      {user?.length > 0 && user.map((item) => (
        <div style={{marginTop:"20px"}} key={item.id}>
          <img src={item.avatar} />
          <p>{ item.email}</p>
          <p>{ item.id}</p>


        </div>  
      ))}
      

    </div>
  )
}
