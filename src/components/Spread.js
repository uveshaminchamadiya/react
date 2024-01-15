import React from 'react'

function Spread() {
    const numbers = ['item-1','item-2','item-3','item-4','item-5','item-6','item-7','item-8'];
    const [one, two, ...rest] = numbers;
    return (
        <>
            <h3>Spread Example</h3>
            <p>{one}</p>
            <p>{two}</p>
            <p>{rest}</p>
            <br />
            <hr />
            <br />
        </>
  )
}

export default Spread
