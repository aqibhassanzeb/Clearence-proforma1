import React from 'react'
import '../../Deptt/CSdeptt/ClearenceRequest/ClearenceRequestStudents.css'
import FacultyNavbar from '../Navbar/FacultyNavbar'


const RequestClearece = ({title}) => {
  const ClearenceRequest=[
    { id:1, Name:"Ali Khan", RollNo:"1", Batch:"9th", },
    { id:2, Name:"Babar Khan", RollNo:"2", Batch:"5th", },
    { id:3, Name:"Dilawaiz Khan", RollNo:"4", Batch:"6th", },
    { id:4, Name:"Emran Khan", RollNo:"34", Batch:"4th", },
    { id:5, Name:"Farhan Khan", RollNo:"33", Batch:"4th", },
    { id:6, Name:"Gafar Khan", RollNo:"23", Batch:"8th", },

  ]

    return (
          <>
        <FacultyNavbar/>
      <div>
        <h1 className='clearencerequeststudentheading'>{title}</h1>
        <div style={{overflow: "auto"}}>
            
            <table className="table clearencerequeststudenttable ">
  <thead>
    <tr >
      <th scope="col">S/No</th>
      <th scope="col">Name</th>
      <th scope="col">RollNo</th>
      <th scope="col">Batch</th>
      <th scope="col">Issue</th>
      <th scope="col">Done</th>
    </tr>
  </thead>
  <tbody>

  {
    ClearenceRequest.map((elem)=>
    
    <tr key={elem.id}>
      <th scope="row">{elem.id}</th>
      <td>{elem.Name}</td>
      <td>{elem.RollNo}</td>
      <td>{elem.Batch}</td>
      <td><button className='btn btn-danger'>Issue</button></td>
      <td><button className='btn btn-success'>Done</button></td>
    </tr>
    
    )
}    
  </tbody>
</table>
        </div>
        </div>
        </>
    )
}

export default RequestClearece
