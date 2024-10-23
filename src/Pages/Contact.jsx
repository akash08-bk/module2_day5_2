import { useForm } from "react-hook-form"

function Contact() {
  const { register, handleSubmit } = useForm()
  const OutPut = (data) => console.log
  (data)
  return (
    <div>
      <form onSubmit={handleSubmit 
        (OutPut)}>
        <label>Enter Your Name</label>
        <input {...register('fullname')}type="text"/>
        <br/>
       <label htmlFor="">Enter Your Email</label>
       <input {...register('email')} type="email" /> 
       <br/>
       <label htmlFor="">Enter Your Message</label>
       <input {...register('msg')}type="text"/>
       <br/>
       <input type='submit'/>
      
      
      </form>
    </div>
  )
}

export default Contact