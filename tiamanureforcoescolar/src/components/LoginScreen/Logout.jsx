import React from 'react'
import { AppContext } from '../../AppContext'
import { useNavigate } from 'react-router';

function Logout() {
  const { setUserData, setIsLoggedIn } = React.useContext(AppContext);
  const navigate = useNavigate();
  React.useEffect( ()=> {
    setUserData(false)
    setIsLoggedIn(false)
    navigate('/login')
  })
  return (
    <div>Logout</div>
  )
}

export default Logout