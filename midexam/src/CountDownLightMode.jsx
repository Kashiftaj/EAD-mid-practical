
import { useState, useEffect } from "react"
function CountDownLightMode(){
  
  const [timer,setTimer]=useState(30);

  useEffect(()=>{


  },[timer])

  return(
    <>
    <div>
      <h1>Countdown & LightMode</h1>
      <div>
        <label htmlFor="">
          <input onChange={(e)=>{
            //change light mode to dark and vice versa
          }} type="checkbox" name="" id="" />
        </label>
        <span className="span" >Light Mode</span>
      </div>

      <p>{timer}</p>
      <button onClick={()=>{ const time=setInterval(()=>{
      setTimer((timer)=>{
        timer -1
      })
     },1000)
     console.log(timer)}}>StartTimer</button>
    </div>
    </>
  )
}

export default CountDownLightMode