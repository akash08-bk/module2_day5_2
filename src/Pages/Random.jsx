import React, {useState} from 'react'
import axios from 'axios'

function Random() {
    const [user,setUserData] = useState(null)
    const URL = "https://randomuser.me/api/?results=1"
    function fetchAPI(){
        axios.get(URL)
        .then(response=>setUserData(response.data.results[0]))
        .catch(error=>console.log("error in fetching dats",error));
    }
    console.log(user);
    
  return (
    <div>
        <h1>Random user detsils:</h1>
        <h2></h2>
        <button onClick={fetchAPI}>click here to load results</button>
    </div>
  )
}

export default Random
