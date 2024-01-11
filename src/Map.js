import React from 'react'

function Map() {
    const myArray = ['apple', 'banana', 'orange'];

    // first way to fetch data
    // const myList = myArray.map((item) => <p>{item}</p>)

    return (
        // first way
        // myList
        // second way to fetch data 
        <>
        <h3>Map Example</h3>
        <ul>
        {myArray.map((item) => {
            return <li>{item}</li>
        })}
        </ul>
        <br/>
        </>
    )
}

export default Map
