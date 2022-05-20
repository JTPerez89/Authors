import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from '../components/Form';

const Create = () => {
    const [errors, setErrors] = useState();
    const navigate = useNavigate();

    const createAuthor = name => {
        axios.post('http://localhost:8000/api/author/new', {name})
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
            <h4>Add a new author:</h4>
            <Form onSubmitProp={createAuthor} initialName={''} errors={errors} />
        </div>
    )
}

export default Create;