import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

const Update = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState();
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`)
            .then(res => {setAuthor(res.data);})
            .catch(err => console.log('Error: ', err))
    }, [])

    const updateAuthor = name => {
        axios.put(`http://localhost:8000/api/${id}/update`, {name})
        .then(res => {
            console.log('Response: ', res)
            navigate('/');
        })
        .catch(err => {
            console.log('Error: ', err)
            const errArr = []
            const errorObject = err.response.data.errors
            for(let errKey in errorObject) {
                errArr.push(errorObject[errKey]['message'])
            }
            setErrors(errArr)
        })
    }

    return (
        <div>
            <Link to={'/'}>Home</Link>
            <h4>Edit this author:</h4>
            {author &&
            <Form onSubmitProp={updateAuthor} initialName={author.name} errors={errors} />
            }
        </div>
    )
}

export default Update;