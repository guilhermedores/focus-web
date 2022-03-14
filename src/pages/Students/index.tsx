import DataTable  from '../../components/DataTable'
import { useEffect, useCallback } from 'react'
import { retrieveStudents } from '../../redux/actions/students'
import { connect, useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

export default function StudentPage() { 

  const students = useSelector((state: any) => state.students.data);
  const dispatch = useDispatch();
  const retrieveStudentsList = useCallback(() =>  dispatch(retrieveStudents()), []);

  useEffect(() => {
    retrieveStudentsList();
  },[])  

  const columns = [
    { title : 'Nome', key : 'name',  type: 'text'},
    { title : 'Email', key : 'email',  type: 'text'},
    { title : 'Data de nascimento', key : 'birthDate', type: 'date' }
  ]

  return (
    <>
      <DataTable dataSource={students} columns={columns} />
    </>
  )
}