import { useQuery } from "react-query";
import axios from 'axios';

const fetchTodos = () => {
    return axios.get('http://localhost:4000/todos');
}

export const RQtodos = () => {
    const { isLoading, data } = useQuery('todos', fetchTodos);

    if (isLoading) {
        return <h2>Loading...!!</h2>
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
