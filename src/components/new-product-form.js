import { useState } from "react"
import {useEffect} from 'react'
import axios from "axios"
import Calendar from './calendar'
import moment from 'moment'
const API_URL = 'http://localhost:5005'

const dataArray = [new Date("10/04/2021"),new Date("10/05/2021"),new Date("10/06/2021"),new Date("10/07/2021")]




function NewProductForm() {

   
   
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(0)
    const [photo, setPhoto] = useState("")
    const [category, setCategory] = useState([])
    const [yearOfAcquisition, setYearOfAcquisition] = useState(0)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null)
    const [dates, setDates] = useState({})

    let dataPrint = new Date(moment(startDate).format('MM/DD/YYYY'))

    console.log('startDate:',dataPrint)

    const handleName = (e) => setName(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleAmount = (e) => setAmount(e.target.value);
    const handlePhoto = (e) => setPhoto(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    const handleYearOfAcquisition = (e) => setYearOfAcquisition(e.target.value);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log(dates)
        setDates(dates)
   
        
    };

    /* useEffect(()=>{
        dataArray.push(dataPrint)
        console.log('dataArray:', dataArray)

    },[name]) */

    const totalDays = (startDate, endDate) => {
        let actualDay = startDate
        let totalDateArray = [];
        while (actualDay.isSameOrBefore(endDate)){
            totalDateArray.push(moment(actualDay).format('MM/DD/YYYY'))
            actualDay.add(1,'days')
        }
        return totalDateArray
        }


    const handleSubmit = (e) => {
        e.preventDefault()

        let firstDay =  moment.utc(startDate)
        let lastDay = moment.utc(endDate)
        
        const finalDateArray = totalDays(firstDay, lastDay)
        






        let objectToSubmit = {name: name, description: description, amount: amount, photo: photo, category: category, yearOfAcquisition: yearOfAcquisition, startDate: startDate, endDate: endDate, booking: finalDateArray}

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
        <Calendar onChange={onChange} startDate={startDate} endDate={endDate}/>
        <button type="submit">Add</button>

    </form>
    
    
    
    )

}

export default NewProductForm