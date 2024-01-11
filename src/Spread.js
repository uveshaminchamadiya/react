import React from 'react'

function Spread() {
    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;
    return (
        <>
            <h3>Spread Example</h3>
            <p>{one}</p>
            <p>{two}</p>
            <p>{rest}</p>
            <br />
        </>
  )
}

export default Spread
