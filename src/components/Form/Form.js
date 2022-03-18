import React from 'react'
import './Form.css'
import image from './universityofswabi.jpg'

const Form = () => {
    return (
      <>
      <div className='Form'>
        <div className='container-form'>
           <div className='row'>
              <img className='col-lg-4 col-md-6 col-sm-6 formlogo'  style={{justifyContent:'center'}} src={image} alt="University Of Swabi" />
              <h1  className='col-8 Uostitle ' style={{justifyContent:'center'}}>University Of Swabi</h1>
            <h3 className='col-12 clearenceproformaname '  style={{justifyContent:'center'}}>Clearence Proforma</h3> 
            </div>
          <hr/>
         <div className="row Studentinformation "> 
            <h6 className='col-6 '>Name :</h6>
            <h6 className='col-6 '>Aqib</h6>
            <h6 className="col-6 ">Father Name :</h6>
            <h6 className="col-6 ">Chand Bahadar</h6>
          </div>  <div className='row'>
            <h6 className='col-6 '>Semester :</h6>
            <h6 className='col-6 '>7th</h6>
            <h6 className='col-6 '>Class Roll No :</h6>
            <h6 className='col-6 '>Twenty Five</h6>
             </div>
             <div className='row'>
             <h6 className='col-6 '>Department :</h6>
             <h6 className='col-6 '>Computer Science</h6>
            <h6 className='col-6 '>Session :</h6>
            <h6 className='col-6 '>2018-2022</h6>
            </div>
            <div className='row'>
            <h6 className='col-6 registrationno'>Registration No :</h6> 
            <h6 className='col-6 registrationno'>UOS@34324324</h6> 
            </div>
            <hr />

            {/* This is faculty section */}
        
            <div className='row'>
            <h6 className='col '>Deputy Librarian  :</h6> 
            <h6 className='col '>Remarks</h6> 
            </div>
            <br />
            <div className='row'>
            <h6 className='col '> Res/Asst Wardon Hostal:</h6> 
            <h6 className='col '>Remarks</h6> 
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Transport Incharge:</h6> 
            <h6 className='col '>Remarks</h6> 
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Director Adminstration:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Incharge Examination:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Chief Proctor:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Provost:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Assistant Director Sports:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Dealing Assistant:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Chairman Department HOD:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h6 className='col '>Treasures:</h6> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <br />
            <div className='row'>
            <p className='formnote'><b>Note:</b> This is computer generated <br />please check it with student Reg No. Thanks </p> 
            </div>         
            <div className='row'>
            <h6 className='studentsignature'>Student Signature </h6> 
            </div>
            </div>
        
        </div>
        <div className='btnpcprotion'>
            <button className='btnprintcertificate btn-primary'>Print Certificate</button>
            </div>
        </>     
    )
}

export default Form
