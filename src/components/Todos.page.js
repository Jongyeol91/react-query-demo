
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Todos = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/todos').then((res) => {
            setData(res.data);
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <h2>loading</h2>
    }

    return(
        <>
            {data.map(cv => {
                return <div key={cv.name}>{cv.name}</div>
            })}
        </>
    )
}
