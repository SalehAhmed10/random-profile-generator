import React from 'react'
import { Button } from 'react-bootstrap'


const FetchButton = ({isActive,clicked}) => {
  return (
    
    <div className=" fetchbtn">
         <Button variant="success" onClick={clicked}>
              { isActive ? "Get Another Profile" : "Get Profile"}       
          </Button>
      </div>
   
  )
}

export default FetchButton