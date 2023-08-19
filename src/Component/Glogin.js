import { GoogleLogin } from "react-google-login";
// import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";
 import { setCookie } from "./Cookie";
// import { useNavigate } from 'react-router';
// import { useNavigate  } from "react-router-dom";
//  import {Employdetails} from "./Employdetails"
const clientId = "655866730513-cc0069ksf0oq5am0fkrrmmibre04pfle.apps.googleusercontent.com";

function Glogin() {
  // const navigate =

  
const onSuccess = (res) => {
  debugger;
   console.log("LOGIN SUCCESS! Current user: ",res.profileObj);
    setCookie("LOGIN_EMAIL",res.profileObj.email,1);
    window.location.replace("/EmployeeDetail");
  
}
const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ",res);
}

  return (
    <div id="signInButton">
        <GoogleLogin
                clientId={clientId}
                buttonText="Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"http://localhost:3000"}
                isSignedIn={true}
        ></GoogleLogin>
        
    </div>
  
  )
  
}

export default Glogin;