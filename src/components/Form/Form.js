import React from 'react'
import './Form.css'
import image from './universityofswabi.jpg'

const Form = () => {
    return (
        <div className='container-form'>
           <div className='row'>
              <img className='col-4 formlogo' src={image} alt="University Of Swabi" />
              <h1  className='col-8 Uostitle '>University Of Swabi</h1>
            <h3 className='col-12 clearenceproformaname '>Clearence Proforma</h3> 
            </div>
          <hr/>
         <div className="row Studentinformation "> 
            <h5 className='col-6 '>Name :</h5>
            <h5 className='col-6 '>Aqib</h5>
            <h5 className="col-6 ">Father Name :</h5>
            <h5 className="col-6 ">Chand Bahadar</h5>
          </div>  <div className='row'>
            <h5 className='col-6 '>Semester :</h5>
            <h5 className='col-6 '>7th</h5>
            <h5 className='col-6 '>Class Roll No :</h5>
            <h5 className='col-6 '>Twenty Five</h5>
             </div>
             <div className='row'>
             <h5 className='col-6 '>Department :</h5>
             <h5 className='col-6 '>Computer Science</h5>
            <h5 className='col-6 '>Session :</h5>
            <h5 className='col-6 '>2018-2022</h5>
            </div>
            <div className='row'>
            <h5 className='col-6 registrationno'>Registration No :</h5> 
            <h5 className='col-6 registrationno'>UOS@34324324</h5> 
            </div>
            <hr />

            {/* This is faculty section */}
        
            <div className='row'>
            <h5 className='col '>Deputy Librarian  :</h5> 
            <h6 className='col '>Remarks</h6> 
            </div>
            <br />
            <div className='row'>
            <h5 className='col '> Res/Asst Wardon Hostal:</h5> 
            <h6 className='col '>Remarks</h6> 
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Transport Incharge:</h5> 
            <h6 className='col '>Remarks</h6> 
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Director Adminstration:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Incharge Examination:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Chief Proctor:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Provost:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Assistant Director Sports:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Dealing Assistant:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Chairman Department HOD:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <div className='row'>
            <h5 className='col '>Treasures:</h5> 
            <h6 className='col '>Remarks</h6>
            </div>
            <br />
            <br />
            <div className='row'>
            <p className='formnote'><b>Note:</b> This is computer generated <br />please check it with student Reg No. Thanks </p> 
            </div>         
            <div className='row'>
            <h5 className='studentsignature'>Student Signature </h5> 
            </div>
        
        </div>
        
    )
}

export default Form
