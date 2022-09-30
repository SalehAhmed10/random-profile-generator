import React from 'react'
import './styles/header.css'


function Header() {
    return (
        <div className=" header row">
            <div className="credits col-6"> 
                <span> <img src='/assets/github.png' alt="github"/> <small>  </small>  </span> 
                <a href="https://github.com/SalehAhmed10" target="_blank" rel="noopener noreferrer">  <small>Project of Saleh Ahmed </small> </a>
            </div>


            <div className="icons col-6">
            
            <a href="https://randomuser.me/" target="_blank" rel="noopener noreferrer">    <span> <small>randomuser.me </small>  </span> </a>  <img src='/assets/api.png' alt="api"/> 
                
             </div> 
        </div>
    )
}

export default Header