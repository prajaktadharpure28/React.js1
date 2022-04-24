import React from 'react'
import "./Student.css"

function Student(props) {
  const student = props.student;
  return (
    <div className='student-container'>
        <h3>Name: {student.name}</h3>
        <h3>Roll no.: {student.roll }</h3>
        <h3>Mobile: {student.mobile}</h3>  
        <h3>isRegular: {student.isRegular===true?"Yes":"No"}</h3>
    </div>
  )
}

export default Student