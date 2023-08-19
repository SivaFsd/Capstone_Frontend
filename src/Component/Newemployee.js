import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
// import { getCookie } from "./Cookie";

function Newemployee() {
  return (
  <div>
    <div className='hstack gap-2 d-flex justify-content-center mt-1'>
    <button type="submit" className="btn btn-primary">New</button>
    <button type="submit" className="btn btn-primary">Edit</button>
    <button type="submit" className="btn btn-primary">View</button>
  </div>
        <div className='form'>
<form className="vstack gap-2 align-items-center">
        <label>
         Employee ID: <input name="myInput" className='mt-3' />
        </label>
        <label>
         Name: <input name="myInput" className='name' />
        </label>
        <label>
         Age: <input name="myInput" className='age' />
        </label>
  <button type="submit" className="btn btn-primary">Save</button>

</form>
</div>
    </div>
  )
}

export default Newemployee