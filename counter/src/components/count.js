import React, {useState} from "react";

export function Count() {
    const [number, setNumber] = useState(1)
    const [numberDouble, setNumberDouble] = useState(1)
    const handelCount = () => {
        setNumber(prevState => prevState + 1)
    }
    const handelCountDouble = () => {
        setNumberDouble(prevState => prevState + 2)
    }

    return (
        <>
            <h1>Count: value={number} </h1>
            <button onClick={handelCount} placeholder="number">Add</button>

            <h1>Count: value={numberDouble} </h1>
            <button onClick={handelCountDouble} placeholder="number">Add</button>
        </>
    )

}