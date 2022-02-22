import React from 'react'
import DepttNavbar from '../Navbar/DepttNavbar'
import './AccountRequestStudent.css'

const AccountRequestStudent = () => {
  const AccountRequest=[
    { id:1, Name:"Ali Khan", RollNo:"1", Batch:"9th", },
    { id:2, Name:"Babar Khan", RollNo:"2", Batch:"5th", },
    { id:3, Name:"Dilawaiz Khan", RollNo:"4", Batch:"6th", },
    { id:4, Name:"Emran Khan", RollNo:"34", Batch:"4th", },
    { id:5, Name:"Farhan Khan ", RollNo:"33", Batch:"4th", },
    { id:6, Name:"Gafar Khan", RollNo:"23", Batch:"8th", },
    
  ]


    return (
        <><DepttNavbar/>
        <h1 className='accountrequeststudentheading'>Account Request Students</h1>
        <div style={{overflow: "auto"}}>
            
            <table className="table accountrequeststudenttable ">
  <thead>
    <tr >
      <th scope="col">S/No</th>
      <th scope="col">Name</th>
      <th scope="col">RollNo</th>
      <th scope="col">Batch</th>
      <th scope='col'>Valid</th>
      <th scope='col'>Invalid</th>
    </tr>
  </thead>
  <tbody>
    {
    AccountRequest.map((record)=>
    
    <tr >
      <th scope="row">{record.id}</th>
      <td>{record.Name}</td>
      <td>{record.RollNo}</td>
      <td>{record.Batch}</td>
      <td><button className='btn btn-success'>Valid</button></td>
      <td><button className='btn btn-danger'>Invalid</button></td>
    </tr>
    
    )
}
  </tbody>
</table>
        </div>
        </>
    )
}

export default AccountRequestStudent
