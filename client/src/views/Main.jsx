import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    const [author, setAuthor] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
        .then(res => setAuthor(res.data))
        .catch(err => console.error(err))
    }, [refresh])

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/${id}/delete`)
        .then(res => console.log('Response: ', res))
        .catch(err => console.error(err));
        setRefresh(!refresh)
    }

    return (
        <div>
            <Link to={'author/new'}>Add new author</Link>
            <h4>We have quotes by:</h4>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {author && author.map( (author, index) => 
                        <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <button onClick={() => navigate(`${author._id}/update`)}>Edit</button>
                                <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Main;