import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(name);
    }

    return (
        <div>
            {props.errors&&
            props.errors.map((err, index) => {
                return(
                    <p key={index}>{err}</p>
                )
            })
            }
            <form onSubmit={onSubmitHandler}>
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }}/>
                <input type="submit" value="Submit" />
            </form>
                <button onClick={()=>navigate('/')}>Cancel</button>
        </div>
    )
}

export default Form;