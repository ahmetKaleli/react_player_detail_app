import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <p onClick={()=>navigate("/")}>Player Detail</p>  
     - <p onClick={()=>navigate("/contact")}>Contact</p>
    </div>
  )
}
