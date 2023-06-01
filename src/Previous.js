
import React,{useEffect,useRef} from "react";
function Previous(props){
    const lastVal=useRef();
    useEffect(()=>{

        lastVal.current=props.count
    })
    const prevoiusprop=lastVal.current
    return(
        <div>
            <h1>current value :{props.count}</h1>
            <h1> Previous valu:{prevoiusprop}</h1>
        </div>
    )
}
export default Previous;