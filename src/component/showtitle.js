import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Showtitle = () => {

    let query = useQuery()
    const [item, setitem] = useState('')
    console.log("temssss", item)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/' + query.get('id')).then(response => response.json()).then(json => setitem(json))
    }, [query])

    return (
        <div>

            <h3> ID:{query.get('id')} is <span style={{ color: 'red' }}>{item.title}</span></h3>
        </div>
    )
}


export default Showtitle;