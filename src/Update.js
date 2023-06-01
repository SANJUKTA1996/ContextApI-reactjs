
import React,{useEffect} from "react";
function Update(props){

    useEffect(()=>{
        console.warn("ueseffect is called");
    },[])
 
  return(
    <div>
      <h1>UseEffect in React js {props.countProps} </h1>



    </div>
  )
}
export default Update;