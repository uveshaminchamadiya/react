import React, { useState, createContext, useContext } from 'react'

const UserContext = createContext();

function UseContext() {

    const [user, setUser] = useState("Raj Verma");

    return (
        <>
        <h3>Use Context Example </h3>
        <UserContext.Provider value={user}>
            <p>Component 1</p>
            <h2>{`Hello ${user}!`}</h2>
            <Component2 />
        </UserContext.Provider>
        </>
    )
}

function Component2() {
    return (
        <>
            <p>Component 2</p>
            <Component3 />
        </>
    );
}

function Component3() {
    return (
        <>
            <p>Component 3</p>
            <Component4 />
        </>
    );
}

function Component4() {
    return (
        <>
            <p>Component 4</p>
            <Component5 />
        </>
    );
}

function Component5() {
    const user = useContext(UserContext);

    return (
        <>
            <p>Component 5</p>
            <h2>{`Hello ${user} again!`}</h2>
            <br />
            <hr />
            <br />
        </>
    );
}

export default UseContext
