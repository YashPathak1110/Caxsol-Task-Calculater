import React,{useState} from "react";
import "./App.css";

const App=()=> {
  const [result,setResult]=useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
  }
  
  const clearDisplay=()=>{
    setResult("");
  }
  const calculate=()=>{
    setResult(eval(result.toString()))
  }
  return(
    
   
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>

      {/* All operation button  */}  
      <input type="button" value={"9"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"8"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"7"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"6"} className="button" onClick={clickHandler}></input><br></br>
      <input type="button" value={"5"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"4"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"3"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"2"} className="button" onClick={clickHandler}></input><br></br>
      <input type="button" value={"1"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"."} className="button" onClick={clickHandler}></input>
      <input type="button" value={"-"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"+"} className="button" onClick={clickHandler}></input><br></br>
      <input type="button" value={"*"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"/"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"%"} className="button" onClick={clickHandler}></input>
      <input type="button" value={"00"} className="button" onClick={clickHandler}></input>
 
      {/* clear   &   ( = ) button */}
      <input type="button" value={"clear"} className="button button1" onClick={clearDisplay}></input>
      <input type="button" value={"="} className="button button2" onClick={calculate}></input>
    </div>
  
  );
}

export default App;
