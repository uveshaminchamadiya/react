import React from 'react'

function Props(props) {
  return (
    <>
        <h3>Props Example</h3>
        My bike brand is {props.brand}, and bike model is {props.model} of {props.color} color.
        <br />
        <br />
        <hr />
        <br />
    </>
  )
}

export default Props
