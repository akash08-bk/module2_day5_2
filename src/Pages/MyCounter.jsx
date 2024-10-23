import React, { useState} from 'react'

function MyCounter() {
  const [count,setCountfunction]=useState(0)
  function IncrementCounter(){
    setCountfunction(count+1);
    console.log(count);
    console.log("function is called increment");
  }
  function DecrementCounter(){
    if(count<1){
      alert("Negative number are not allowed")
    }else{
      setCountfunction(count-1)
    }
    console.log(count);
    console.log("function is called decrement");
    
    
  
    
    
  }
  return (
    <div>
      <h2>Counter current Value:{count} </h2>
       <div>
       <button onClick={IncrementCounter}>
        Increment button</button>
        <button onClick={DecrementCounter}>
        Decrement button
       </button>
       </div>
       </div>
  )
}

export default MyCounter