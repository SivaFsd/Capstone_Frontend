import {React,useCallback} from 'react'
import './Logout.css'
import { useGoogleLogout  } from "react-google-login";
import { removeCookie } from './Cookie';
const gclientId = "655866730513-cc0069ksf0oq5am0fkrrmmibre04pfle.apps.googleusercontent.com";
function Logout() {
  const handleLogoutSuccess = (res) => {
    
    window.location.replace("/");
  }
  const handleLogoutFailure = (res) => {
      console.log("Logut fail: ",res);
  }
  const FbLogout = (res) => {
    window.location.replace("/");
  }
  
  const { signOut } = useGoogleLogout({
   
    clientId:gclientId,
    onLogoutSuccess: handleLogoutSuccess,
    onFailure: handleLogoutFailure,
  });
    const Logout1 = () => {
        debugger;
        removeCookie("LOGIN_EMAIL");
        signOut();
        FbLogout();
    }
    
  return (
    <div className='navbar'>
        <ul className="list">
            <button className='listitems' onClick={Logout1}>Logout</button>
        </ul>
     
    </div>
  )
}

export default Logout