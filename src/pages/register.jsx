// import { useDispatch } from 'react-redux'
import { fielddata, filedata } from '../redux/actions/action'
import './index.css'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
  const [values , setValues] = useState({
    name:"",
    email:"",
    password:"",
    mobile:'',
    profile:null
  })
  const [file , setFile] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleChange =(e)=>{
    e.preventDefault();
    setValues({
      ...values , [e.target.id]:e.target.value
    })
  }
  // console.log(file);
  // console.log(values);
  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(filedata(file))
    dispatch(fielddata(values))
    navigate('/dashboard')
  }
  // console.log(file);
  return (
    <div>
      <div className="header">
        <h1 className='text-center m-4'>User Registration</h1>
        <form className='d-flex  flex-column gap-4  align-items-center' onSubmit={handleSubmit}>
          <input type="file" id='profile' className='p-3' accept='image/*'  onChange={(e)=>setFile(e.target.files[0])}/>
          <input type="text" id='name' className='box p-3' placeholder='name' value={values.name} onChange={handleChange} />
          <input type="text" id='email' className='box p-3' placeholder='email' value={values.email} onChange={handleChange} />
          <input type="password" id='password' className='box p-3' placeholder='password'  value={values.password} onChange={handleChange} />
          <input type="text" id='mobile' className='box p-3' placeholder='mobile' value={values.mobile} onChange={handleChange} />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register