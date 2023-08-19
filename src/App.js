import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CommonLogin from './Component/CommonLogin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Newemployee from './Component/Newemployee';
import Employdetails from './Component/Employdetails';
import Main from './Component/Main';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element= {<CommonLogin />} />
      <Route path = "/Main" element= {<Main />} />
      <Route path = "/Newemployee" element= {<Newemployee />} />
      <Route path = "/EmployeeDetail" element= {<Employdetails />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
