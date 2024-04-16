import React from 'react'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    // const {name , email , mobile , file} = useSelector((state)=>state)
    const {file , fielddata} = useSelector((state)=>state)
    console.log(fielddata);
  return (
    <div className='p-5'>
      <table className="table text-center">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Profile</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><img src={URL.createObjectURL(file)} alt="no" style={{
        height:"50px",
        width:"50px"
      }} /></td>
      <td>{fielddata.name}</td>
      <td>{fielddata.email}</td>
      <td>{fielddata.mobile}</td>

    </tr>
    </tbody>
</table>
    </div>
  )
}

export default Dashboard