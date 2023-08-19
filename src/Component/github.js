// This is Github code
import React from 'react'
import { useEffect } from 'react';
 import { setCookie } from "./Cookie";
const CLIENT_ID = 'fb4864d8744ed53a8b87';

function Github() {

useEffect (() => {
  const qureyString = window.location.search;
  const urlParams = new URLSearchParams(qureyString);
  debugger;
  const codeParam = urlParams.get("code");
  if(codeParam!=null)
  {
    console.log(codeParam);
    setCookie("LOGIN_EMAIL",codeParam,1);
    window.location.replace("/EmployeeDetail");
  }
}, [])

  function loginwithgithub() {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID);

    
  }

   return (
     <div className="App">
      <button onClick={loginwithgithub}>
        Login With Github
      </button>
     </div>
   );
}

export default Github