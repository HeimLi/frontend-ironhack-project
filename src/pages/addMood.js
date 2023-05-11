import React, { useState } from 'react';
import axios from 'axios';

const AddMood = () => {

  const [day, setDay] = useState("");
  const [daytime, setDaytime] = useState("");
  const [mood, setMood] = useState("");

  const handleDay = (e) => {
    setDay(e.target.value)
  }

  const handleDaytime = (e) => {
    setDaytime(e.target.value)
  }

  const handleMood = (e) => {
    setMood(e.target.value)
  }

  
  const handleSubmit = (e) => {
    const token = localStorage.getItem("authToken");
    axios.post("http://localhost:5005/api/moods/create", {day, daytime, mood}, {headers: { Authorization:`Bearer ${token}`}})
    .then(res => {
      console.log(res);
    })
  }

  return (
      <div className="addMoodPage">
        <h1>How are you right now?</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Day:</label>
          <input type="day" name="day" value={day} onChange={handleDay} />
         
          <label>Daytime:</label>
          <input type="daytime" name="daytime" value={daytime} onChange={handleDaytime} />
          
          <label>Mood:</label>
          <input type="mood" name="mood" value={mood} onChange={handleMood} />
          <br />
          <br />
          <button type="submit">Save</button>
          <br />
          <button><a href="/SignupPage">Logout</a></button>
        </form>
      </div>
    )
  }


export default AddMood;


