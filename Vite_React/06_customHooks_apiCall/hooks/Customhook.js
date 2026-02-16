import { useState, useEffect } from "react";

function Customhook(currency) {
    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((resp)=>setValue(resp[currency]))
        // console.log(value)

    }, [currency])

    return value
}

export default Customhook