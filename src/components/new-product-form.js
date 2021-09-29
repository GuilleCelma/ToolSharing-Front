import { useState } from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"
const API_URL = 'http://localhost:5005'



function NewProductForm() {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const [photo, setPhoto] = useState("")
    const [category, setCategory] = useState([])
    const [yearOfAcquisition, setYearOfAcquisition] = useState(0)

    const handleName = (e) => setName(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleAmount = (e) => setAmount(e.target.value);
    const handlePhoto = (e) => setPhoto(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    const handleYearOfAcquisition = (e) => setYearOfAcquisition(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()

        let objectToSubmit = {name: name, description: description, amount: amount, photo: photo, category: category, yearOfAcquisition: yearOfAcquisition}

        console.log(objectToSubmit);

        axios
        .post(`${API_URL}/new-product`, objectToSubmit)
        .then((result)=>{
           console.log(result)
        })


    }




    return(
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={handleName}></input>
        <label>Description:</label>
        <input type="text" name="description" value={description} onChange={handleDescription}></input>
        <label>Amount:</label>
        <input type="number" name="amount" value={amount} onChange={handleAmount}></input>
        <label>Photo:</label>
        <input type="text" name="photo" value={photo} onChange={handlePhoto}></input>
        <label>Category:</label>
        <select name="category" id="category" value={category} onChange={handleCategory}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
        </select>
        <label>Year of acquisition:</label>
        <input type="number" name="YearOfAcquisition" value={yearOfAcquisition} onChange={handleYearOfAcquisition}></input>
        <button type="submit">Add</button>

    </form>
    
    
    
    )

}

export default NewProductForm