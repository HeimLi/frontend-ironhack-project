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
  console.log(context)

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
    console.log(user)
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    axios.post("http://localhost:5005/api/moods/create", { day, daytime, mood, user: user.email }, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err)
      });
  }


  return (
    <div className="addMoodPage">

      <h1>Add your current mood:</h1>

      {/* <div>
        <label htmlFor="user"></label>
        <input id="user" value={user} onChange={handleUser} />
      </div> */}

      <br />
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'none' }}> Date: </label>
        <input style={{ display: 'none' }} type="day" name="day" value={day} onChange={handleDay} />
        <br />
        <br />
        <span> Time: </span>
        <label style={{ display: 'none' }}> Daytime: </label>
          <br />
          <label htmlFor="before work"> Before work </label>
          <input id="before work" name="daytime" type="radio" value="before work" onChange={handleDaytime} />
          <label htmlFor="after work"> After work </label>
          <input id="after work" name="daytime" type="radio" value="after work" onChange={handleDaytime} />
        <br />
        <br />
         <div>
            <label> Mood: </label>
            <br />
            <label htmlFor="I want to git"> Exited </label>
            <input id="exited" name="mood" type="radio" value="exited" onChange={handleMood} />

            <label htmlFor="happy"> Happy </label>
            <input id="happy" name="mood" type="radio" value="happy" onChange={handleMood} />

            <label htmlFor="neutral"> Neutral </label>
            <input id="neutral" name="mood" type="radio" value="neutral" onChange={handleMood} />

            <label htmlFor="bored"> Bored </label>
            <input id="bored" name="mood" type="radio" value="bored" onChange={handleMood} />

            <label htmlFor="sad"> Sad </label>
            <input id="sad" name="mood" type="radio" value="sad" onChange={handleMood} />

            <label htmlFor="depressed"> Depressed </label>
            <input id="depressed" name="mood" type="radio" value="depressed" onChange={handleMood} />
          </div>
        <br />
        <br />
        <button type="submit">Save</button>
        <br />
        <button><a href="/Profile">Back to Profile</a></button>
        <br />
        <button><a href="/myMoods">My Moods</a></button>
        <br />
        <button><a href="/SignupPage">Logout</a></button>
      </form>
    </div>
  );
}

export default AddMood;