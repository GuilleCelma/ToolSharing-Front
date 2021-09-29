import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Calendar from "./calendar";
import moment from "moment";
const API_URL = "http://localhost:5005";

const dataArray = [
  new Date("10/04/2021"),
  new Date("10/05/2021"),
  new Date("10/06/2021"),
  new Date("10/07/2021"),
  new Date("10/20/2021"),
  new Date("10/21/2021"),
  new Date("10/24/2021"),
  new Date("10/25/2021"),
];

function BookForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [error, setError] = useState(false)

  let dataPrint = new Date(moment(startDate).format("MM/DD/YYYY"));

  console.log("startDate:", dataPrint);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const totalDays = (startDate, endDate) => {
    let actualDay = startDate;
    let totalDateArray = [];
    while (actualDay.isSameOrBefore(endDate)) {
      totalDateArray.push(moment(actualDay).format("MM/DD/YYYY"));
      actualDay.add(1, "days");
    }
    return totalDateArray;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let firstDay = moment.utc(startDate);
    let lastDay = moment.utc(endDate);

    const finalDateArray = totalDays(firstDay, lastDay);
    console.log('Hola',new Date(finalDateArray[1]));
    console.log('Adeu',dataArray)

    const newFinalArr = []

    finalDateArray.map((result)=>{if (dataArray.includes(result)){newFinalArr.push(result)}})
    
    console.log(newFinalArr)

    if(newFinalArr.length>0){
        setError(!error)
    } else {

    let objectToSubmit = {
      startDate: startDate,
      endDate: endDate,
      booking: finalDateArray,
    };

    console.log(objectToSubmit);
    }
    /* axios
        .post(`${API_URL}/new-product`, objectToSubmit)
        .then((result)=>{
           console.log(result)
        }) */
    
  };

  return (
    <form onSubmit={handleSubmit}>

      <Calendar onChange={onChange} startDate={startDate} endDate={endDate} excludeDays={dataArray}/>
      <button type="submit">Book</button>
      {error && <h1>Please select available dates</h1>}
    </form>
  );
}

export default BookForm;
