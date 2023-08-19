import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Google from './google';
import Facebook from './facebook';
import Github from './github';
import { useNavigate  } from "react-router-dom";
// import { Routes } from 'react-router-dom';
import { getCookie } from "./Cookie";


function CommonLogin() {

  
  const auth=getCookie("LOGIN_EMAIL");
  if(auth!=null&&auth!=''&&auth!="null")
{
  window.location.replace("/EmployeeDetail");
}
else
{
  return (
    <div>
<div className="vstack gap-2 align-items-center">
        <label>
         Username: <input name="Username" className='mt-3' />
        </label>
        <label>
         Password: <input name="Password" className='passwordHelpBlock' />
        </label>
  <div id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long.
      </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
  <div className='hstack gap-2 d-flex justify-content-center mb-1'>
  <button type="submit" className="btn btn-primary"><Google /></button>
  <button type="submit" className="btn btn-primary"><Facebook /></button>
  <button type="submit" className="btn btn-primary"><Github /></button>
  </div>
</div>
    </div>
  )
}

}
 

export default CommonLogin