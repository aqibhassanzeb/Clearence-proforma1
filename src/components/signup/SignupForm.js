import { Dropdown } from 'bootstrap'
import React from 'react'
import {useHistory} from 'react-router-dom'
import './SignupForm.css'


const SignupForm = () => {
   const history=useHistory();

   return (
      <div>


         <div className="container ">
            <div className='signupformwrapper'>
               <div className="text" id='heading'>CLEARENCE PROFORMA</div>
               <div className="text" id='heading'>Registration Form</div>

               <form action="#">
                  <div className="form-row">
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label for="">Full Name</label>
                     </div>

                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label for="">Father Name</label>
                     </div></div>

                  <div className="form-row">

                     <div className="input-data">
                        <input type="text" required placeholder=' ' />
                        <div className="underline"></div>
                        <label for="">Program</label>
                     </div>



                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label for="">Semeter</label>
                     </div></div>
                  <div className="form-row">
                     <div className="input-data">
                        <input type="number" required />
                        <div className="underline"></div>
                        <label for="">Roll No</label>
                     </div>
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label for="">Batch</label>
                     </div></div>
                  <div className="form-row">
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label for="">Registration No</label>
                     </div>
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label for="">Session</label>
                     </div></div>
                  <div className="form-row">


                     <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           Department Select
                        </button>
                        <ul class="dropdown-menu btn-primary" aria-labelledby="dropdownMenuButton1">
                           <li><a className="dropdown-item" href="#">Computer Sciece</a></li>
                           <li><a className="dropdown-item" href="#">Pharmacy</a></li>
                           <li><a className="dropdown-item" href="#">English</a></li>
                           <li><a className="dropdown-item" href="#">Chemistry</a></li>
                           <li><a className="dropdown-item" href="#">Physics</a></li>
                           <li><a className="dropdown-item" href="#">Physics</a></li>
                           <li><a className="dropdown-item" href="#">Physics</a></li>
                        </ul>
                     </div>


                  </div>
                  {/* <div className="row " >
                     <div className='radiobtnsignupform' id='buttonss'>
                        <div className='col-lg-6 col-sm-6 xs-6'  >


                           <div class="form-check d-flex">
                              <input class="form-check" type="checkbox" value="" id='Box' />
                              <label className='confirm-radio'>
                                 Confirm

                              </label>
                           </div>
                        </div>
                        </div>
                        </div> */}
                       
<div className='row'>

                        <div className='col-lg-12 col-sm-12  ' id='button2'   >

                           <button type="button" className="btn btn-primary" id='Btnsignupformback'
                           onClick={history.goBack}
                           >Back</button>

                           <button type="button" className="btn btn-primary" id='Btnsignupformnext'
                           onClick={()=> history.push('/signupmail')}
                           >Next</button>
                        </div>

                       
                     </div>
                  




               </form>

            </div>


         </div>
      </div>
   )
}

export default SignupForm
