import React, { useEffect, useState } from 'react'
import { Route, Switch, Link } from "react-router-dom";
import Showtitle from './showtitle';

const Showtodo = () => {

    const [data, setdata] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()).then(json => { setdata(json) })

    }, [])

    return (
        <div>
            <h1>
                Id of Data
            </h1>
            <list>
                {
                    data?.map((item, index) => {
                        console.log("itemm", item)
                        return <li> {item.id} <Link to={`/showtitle?id=${item.id}`}> Show title </Link> </li>
                        // return <td> {item.id} </td>
                    })
                }
            </list>
        </div>
    )
}


export default Showtodo