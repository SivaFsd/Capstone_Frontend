// This is FaceBook
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';
import { setCookie } from "./Cookie";
function Facebook() {

  return (
    <div className="App">
      <LoginSocialFacebook
      appId='774107371176930'
      onResolve={(Response) =>{
        setCookie("LOGIN_EMAIL",Response.data.email,1);
        window.location.replace("/EmployeeDetail");
      }}
      onReject={(error) =>{
        console.log(error);
      }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}

export default Facebook;