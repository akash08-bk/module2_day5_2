import React from 'react'
import NavigationBar from '../components/NavigationBar'
import CustomButton from '../components/CustomButton'

const About = () => {
  const About_Us = {
    name:'Akash',
    id: '007',
    Organisation:'Deloitte',
    position:'Trainee',
    emailid:'a@gmail.com'
  }
  return (
    <div>
       
        <h1>This is the About page</h1>
        <table  position="center" border="1px solid">
          <tr>
            <td>Name :</td>
            <td>{About_Us.name}</td>
          </tr>
          <tr>
          <td>Emp_id :</td>
            <td>{About_Us.id}</td>
          </tr>
          <tr>
          <td>Organisation :</td>
            <td>{About_Us.Organisation}</td>
          </tr>
          <tr>
           <td>Position :</td>
           <td>{About_Us.position}</td>
         </tr>
         <tr>
         <td>Email id :</td>
         <td>{About_Us.emailid}</td>
       </tr>
        </table>
        <CustomButton cr='red'name='About'/>
    </div>
  )
}

export default About