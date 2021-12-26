import { useQuery } from "react-query";
import axios from 'axios';

const fetchTodos = () => {
    return axios.get('http://localhost:4000/todoss');
}

export const RQtodos = () => {
    const { isLoading, data, isError, error } = useQuery('todos', fetchTodos);

    if (isLoading) {
        return <h2>Loading...!!</h2>
    }


    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <>
            {
                data?.data.map(cv => {
                    return <div key={cv.name}>{cv.name}</div>
                })
            }
        </>
    )
}
