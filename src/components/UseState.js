import React,{ useState } from 'react'

function UseState() {

    const [subject, setSubject] = useState(" - Click Below Button");

  return (
    <>
        <h3>UseState Example</h3>
        <p>My favorite subject is {subject}</p>
        <button onClick={()=> setSubject("Python")}>Python</button>&nbsp;&nbsp;
        <button onClick={()=> setSubject("PHP")}>PHP</button>&nbsp;&nbsp;
        <button onClick={()=> setSubject("React.js")}>React.js</button>
        <br />
        <br />
        <hr />
        <br />
    </>
  )
}

export default UseState
