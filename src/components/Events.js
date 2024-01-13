import React from 'react'

function Events() {

  const myFun = (e) => {
    alert(e)
  }

  return (
    <>
      <h3>Events Example</h3>
      <button onClick={() => myFun("Click Event Demo")}>Click Me!</button>
      <br />
    </>
  )
}

export default Events
