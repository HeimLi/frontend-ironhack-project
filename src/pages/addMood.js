import React, { useState } from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from "../context/auth.context";


const AddMood = () => {
  const [day, setDay] = useState(new Date().toLocaleDateString());
  const [daytime, setDaytime] = useState("");
  const [mood, setMood] = useState("");

  const context = useContext(AuthContext);
  const user = context.user

  const handleDay = (e) => {
    setDay(e.target.value);
  }

  const handleDaytime = (e) => {
    setDaytime(e.target.value);
  }

  const handleMood = (e) => {
    setMood(e.target.value);
  }
  // const handleUser = (e) => {
  //   setUser(e.target.value);
  // }

  const handleSubmit = (e) => {
    console.log("handle submit called")
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    axios.post("http://localhost:5005/api/moods/create", { day, daytime, mood, user: user.email }, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
      })
      .catch(err => {
        console.error(err)
      });
  }


  return (
    <div className="addMoodPage">
      <h1>Add your current mood:</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'none' }}> Date: </label>
        <input style={{ display: 'none' }} type="day" name="day" value={day} onChange={handleDay} />
        <br />
        <br />
        <h4> Time: </h4>
        <label style={{ display: 'none' }}> Daytime: </label>
          <br />
          <label htmlFor="before work"> Before work </label>
          <input id="before work" name="daytime" type="radio" value="before work" onChange={handleDaytime} />
          <br />
          <label htmlFor="after work"> After work </label>
          <input id="after work" name="daytime" type="radio" value="after work" onChange={handleDaytime} />
        <br />
        <br />
         <div>
            <h4> Mood: </h4>
            <br />
            <label htmlFor="exited"> Exited </label>
            <input id="exited" name="mood" type="radio" value="exited" onChange={handleMood} />
            <br />
            <label htmlFor="happy"> Happy </label>
            <input id="happy" name="mood" type="radio" value="happy" onChange={handleMood} />
            <br />
            <label htmlFor="neutral"> Neutral </label>
            <input id="neutral" name="mood" type="radio" value="neutral" onChange={handleMood} />
            <br />
            <label htmlFor="bored"> Bored </label>
            <input id="bored" name="mood" type="radio" value="bored" onChange={handleMood} />
            <br />
            <label htmlFor="sad"> Sad </label>
            <input id="sad" name="mood" type="radio" value="sad" onChange={handleMood} />
            <br />
            <label htmlFor="depressed"> Depressed </label>
            <input id="depressed" name="mood" type="radio" value="depressed" onChange={handleMood} />
          </div>
        <br />
        <button type="submit">Save</button>
        <br />
        <br />
        <button><a href="/myMoods">My moodboard</a></button>
        <br />
        <button><a href="/Profile">Back to Profile</a></button>
        <br />
        <button><a href="/SignupPage">Logout</a></button>
      </form>
    </div>
  );
}

export default AddMood;