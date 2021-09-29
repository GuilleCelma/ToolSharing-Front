import {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup';

import {useHistory} from "react-router-dom"

const API_URL = 'http://localhost:5005'

function Login(){
    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

    const history = useHistory()


    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        let objectToSubmit = {username: username, password: password}

        axios
        .post(`${API_URL}/login`, objectToSubmit)
        .then(()=>{
            history.push('/products')
        })
    }

    return(



        <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleUsername}></input>
        <input type="password" name="password" value={password} onChange={handlePassword}></input>
        <button type="submit">Login</button>            
        </form>

    

    )
}

export default Login
