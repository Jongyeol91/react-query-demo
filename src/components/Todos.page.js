
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Todos = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/todoss').then((res) => {
            setData(res.data);
            setLoading(false)
        }).catch((error) => {
            setError(error.message);
            setLoading(false);
        })
    }, [])

    if (loading) {
        return <h2>loading</h2>
    } 

    if (error) {
        return <h2>{error}</h2>
    }

    return(
        <>
            {data.map(cv => {
                return <div key={cv.name}>{cv.name}</div>
            })}
        </>
    )
}
