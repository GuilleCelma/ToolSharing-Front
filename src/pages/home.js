import axios from "axios";
import {useState} from 'react';

const API_URL = "http://localhost:5005";




function Home(){

    const[username, setUsername] = useState('')
    
    return(
<div>
    <form  onSubmit={(e)=>{
        console.log('submit')
        e.preventDefault();

        let objectToSubmit = {username:username}

        axios
            .post(`${API_URL}/signup`, objectToSubmit)
    }}>
        <input type="text" name="username" value={username} onChange={(e)=>{
            setUsername(e.target.value)
        }}/>
        <button type="submit">Calla la puta boca guiller</button>
    </form>
</div>)
}

export default Home