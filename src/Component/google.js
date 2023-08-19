
// import LogoutButton from './Components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script'; 
import LoginButton from './Glogin';


const clientId = "655866730513-cc0069ksf0oq5am0fkrrmmibre04pfle.apps.googleusercontent.com";


function Google() {

    useEffect(() => {
      function start() {
        gapi.client.init({
          clientId: clientId,
          scope: ""
        })
      }

      gapi.load('client:auth2', start);
    });

  return (
    <div className="App">
      <LoginButton />
      {/* <LogoutButton /> */}
    </div>
  );
}

export default Google;