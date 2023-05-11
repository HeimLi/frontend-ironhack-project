import React, { useState } from 'react';
import axios from 'axios';
import useContext from 'react';
import {AuthContext} from "../context/auth.context";

const AddMood = () => {
  const [day, setDay] = useState(new Date().toISOString());
  const [daytime, setDaytime] = useState("");
  const [mood, setMood] = useState("");

  const handleDay = (e) => {
    setDay(e.target.value);
  }

  const handleDaytime = (e) => {
    setDaytime(e.target.value);
  }

  const handleMood = (e) => {
    setMood(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    axios.post("http://localhost:5005/api/moods/create", { day, daytime, mood }, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err)
      });
  }

  return (
    <div className="addMoodPage">
      <h1>How are you right now?</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label> Date: </label>
        <input type="day" name="day" value={day} onChange={handleDay} />
        <br />
        <br />
        <label> Daytime: </label>
        <select value={daytime} onChange={handleDaytime}>
          <option value="morning">Morning</option>
          <option value="evening">Evening</option>
        </select>
        <br />
        <label> Mood: </label>
        <div value={mood} onChange={handleMood}>
        <label htmlFor="Happy" value={mood} onChange={handleMood}> Happy </label>
        <input id="Happy" name="Test" type="radio"/>

        <label htmlFor="Ok" value={mood} onChange={handleMood}> Ok </label>
        <input id="Ok" name="Test" type="radio" />

        <label htmlFor="Sad" value={mood} onChange={handleMood}> Sad </label>
        <input id="Sad" name="Test" type="radio" />
        </div>

        <br />
        <br />
        <button type="submit">Save</button>
        <br />
        <button><a href="/Profile">Back to Profile</a></button>
        <br />
        <button><a href="/SignupPage">Logout</a></button>
      </form>
    </div>
  );
}

export default AddMood;