import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'

function MyVerticallyCenteredModal(props) {

   return (
     <Modal
       {...props}
       size="md"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
           Clearacne-Proforma
         </Modal.Title>
       </Modal.Header>
       <Modal.Body>
         {/* <h4>Centered Modal</h4> */}
         <p>
         Are you sure to your data is correct! 
         </p>
       </Modal.Body>
       <Modal.Footer>
         <Button onClick={props.onHide}>Close</Button>
         <Button >Conform</Button>
       </Modal.Footer>
     </Modal>
   );
 }


const SignupForm = () => {

   const [modal, setmodal] = useState(false)
   const navigate=useNavigate();

   return (
      <div className='SignupForm'> 


         <div className="signupformcontainer ">
            <div className='signupformwrapper'>
               <div className="text" id='heading'>CLEARANCE PROFORMA</div>
               <div className="text" id='heading'>Registration Form</div>

               <form action="#">
                  <div className="form-row">
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label >Full Name</label>
                     </div>

                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label >Father Name</label>
                     </div></div>

                  <div className="form-row">

                     <div className="input-data">
                        <input type="text" required placeholder=' ' />
                        <div className="underline"></div>
                        <label >Program</label>
                     </div>



                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label >Semeter</label>
                     </div></div>
                  <div className="form-row">
                     <div className="input-data">
                        <input type="number" required />
                        <div className="underline"></div>
                        <label >Roll No</label>
                     </div>
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label >Batch</label>
                     </div></div>
                  <div className="form-row">
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label >Registration No</label>
                     </div>
                     <div className="input-data">
                        <input type="text" required />
                        <div className="underline"></div>
                        <label >Session</label>
                     </div></div>
                  <div className="form-row">


                    
                     <div className='col-lg-5 col-md-5  selectitemoption'>
            <label className='selectdepttlabel'>Select Department</label>
            <select
            name="Department"
            id="selectDeptt"
            className="form-control"
            placeholder='Select'
            >
            <option value="0">
               Computer Science
            </option>
            <option value="1">English</option>
            <option value="2">Pharmacy</option>
            <option value="3">Agriculture</option>
            <option value="4">Geology</option>
           
          </select>

             </div>

                  </div>
                
                       
<div className='row'>

                        <div className='col-lg-12 col-sm-12  ' id='button2'   >

                           <button type="button" className="btn btn-primary" id='Btnsignupformback'
                           onClick={()=>navigate(-1)}
                           >Back</button>

                           <button type="button" className="btn btn-primary" id='Btnsignupformnext'
                           onClick={()=>setmodal(true)}
                           >Submit</button>
                           <MyVerticallyCenteredModal
        show={modal}
        onHide={() => setmodal(false)}
      />
                        </div>

                       
                     </div>
                  




               </form>

            </div>


         </div>
      </div>
   )
}

export default SignupForm
