import React from 'react'
import DepttNavbar from '../Navbar/DepttNavbar'
import './homePage.css'

const Deptthomepage = () => {
    return (
        <>
        <DepttNavbar/>
        <div className='Homepagediv'>
            <h1 className='wellcomcshomepage' >Welcome to</h1>
            <h1 className='uostextcshomepage'> UNIVERSITY OF SWABI</h1>
            <h1 className='depttofcstext'> Department of Computer Science</h1>
        
        </div>
        </>
    )
}

export default Deptthomepage
