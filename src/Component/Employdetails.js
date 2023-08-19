import React from 'react'
 import { getCookie } from "./Cookie";
import Logout from './Logout';
// import { useNavigate  } from "react-router-dom";
// import { useEffect } from 'react';


function Employdetails() {
  const auth=getCookie("LOGIN_EMAIL");
  if(auth!=null&&auth!=''&&auth!="null")
{
   return (
    
    
    <div>
      <Logout></Logout>
      Employdetails</div>
  )
}
else{
  window.location.replace("/");
}
}

export default Employdetails