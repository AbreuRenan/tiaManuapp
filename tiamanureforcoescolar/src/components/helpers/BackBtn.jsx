import React from 'react'
import { useLocation, useNavigate } from 'react-router'

function BackBtn() {
const navigate = useNavigate();
const location = useLocation();
const arrowIcon = 'src/assets/back.png'


    function backBtn() {
        if (location.pathname === '/user' || location.pathname === '/admin') {
          return navigate('/logout')
        }
        return navigate(-1)
      }
  return (
    <div className='voltarBtn' onClick={backBtn}><img src={arrowIcon} alt="arrowIcon" /></div>

  )
}

export default BackBtn