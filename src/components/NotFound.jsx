import React, {useEffect, useState} from 'react'
import {Alert} from "react-bootstrap";
 
export default function NotFound() {
  const [showAlert,setShowAlert] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setShowAlert(false);
    },3000)
  },[])

  return (

        showAlert && <Alert className="alert alert-danger">This page does not exist</Alert>

  )
}
