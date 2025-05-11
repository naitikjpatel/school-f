import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    axios call  
    navigate("")
  },[])
  function load(){
    setTimeout(()=>{
      setLoading(false);
    },5000)
  }
  return (
    {loading ? 
      <Loader/> 
      :
      <UserTypeList userType/>
    }
  )
}

export default Home