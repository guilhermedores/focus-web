import DataTable  from '../../components/DataTable'
import { useState, useEffect } from 'react'

import { getAllStudents } from '../../services/'

const StudentPage = () => {

  const [Students, setStudents] = useState(getAllStudents)  

  useEffect(() => {
    //setStudents(getAllStudents)
  })

  const columns = [
    { title : 'Nome', key : 'name',  type: 'text'},
    { title : 'Email', key : 'email',  type: 'text'},
    { title : 'Data de nascimento', key : 'birthDate', type: 'date' } 
  ]

  return (
    <>
      <DataTable dataSource={Students} columns={columns} />
    </>
  )
}

export default StudentPage