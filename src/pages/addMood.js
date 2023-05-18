import React, { useState } from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from "../context/auth.context";

const AddMood = () => {
  const [day, setDay] = useState(new Date().toLocaleDateString());
  const [daytime, setDaytime] = useState("");
  const [mood, setMood] = useState("");
  const [excitedChecked, setExcitedChecked] = useState(false); // Zustand für "excited" hinzugefügt
  const [happyChecked, setHappyChecked] = useState(false); 
  const [neutralChecked, setNeutralChecked] = useState(false);
  const [boredChecked, setBoredChecked] = useState(false);
  const [sadChecked, setSadChecked] = useState(false);
  const [depressedChecked, setDepressedChecked] = useState(false);
  const [beforeWorkChecked, setBeforeWorkChecked] = useState(false);
  const [afterWorkChecked, setAfterWorkChecked] = useState(false);
  

  const context = useContext(AuthContext);
  const user = context.user

  const handleDay = (e) => {
    setDay(e.target.value);
  }

  const handleDaytimeBefore = (e) => {
    setDaytime(e.target.value);
    setBeforeWorkChecked(true);
    setAfterWorkChecked(false);
  }

  const handleDaytimeAfter = (e) => {
    setDaytime(e.target.value);
    setAfterWorkChecked(true);
    setBeforeWorkChecked(false);
  }


  const handleMoodExcited = (e) => {
    setMood(e.target.value);
    setExcitedChecked(true);
    setHappyChecked(false);
    setNeutralChecked(false);
    setBoredChecked(false);
    setSadChecked(false);
    setDepressedChecked(false);
  };

  const handleMoodHappy = (e) => {
    setMood(e.target.value);
    setHappyChecked(true);
    setExcitedChecked(false);
    setNeutralChecked(false);
    setBoredChecked(false);
    setSadChecked(false);
    setDepressedChecked(false);
  }

  const handleMoodNeutral = (e) => {
    setMood(e.target.value);
    setNeutralChecked(true);
    setExcitedChecked(false);
    setHappyChecked(false);
    setBoredChecked(false);
    setSadChecked(false);
    setDepressedChecked(false);
  }

  const handleMoodBored = (e) => {
    setMood(e.target.value);
    setBoredChecked(true);
    setExcitedChecked(false);
    setHappyChecked(false);
    setNeutralChecked(false);
    setSadChecked(false);
    setDepressedChecked(false);
  }

  const handleMoodSad = (e) => {
    setMood(e.target.value);
    setSadChecked(true);
    setExcitedChecked(false);
    setHappyChecked(false);
    setNeutralChecked(false);
    setBoredChecked(false);
    setDepressedChecked(false);
  }

  const handleMoodDepressed = (e) => {
    setMood(e.target.value);
    setDepressedChecked(true);
    setExcitedChecked(false);
    setHappyChecked(false);
    setNeutralChecked(false);
    setBoredChecked(false);
    setSadChecked(false);
  }

  const handleSubmit = (e) => {
    console.log("handle submit called")
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    axios.post(`${process.env.REACT_APP_API_URL}/api/moods/create`, { day, daytime, mood, user: user._id }, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => {
      })
      .catch(err => {
        console.error(err)
      });
  }
 
  return (
    <div className="addMoodPage">
      <h3>Add your current mood:</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="hidden"> Date: </label>
        <input className="hidden" type="day" name="day" value={day} onChange={handleDay} />
        <br />
        <br />
        <h4> Before or after work?</h4>
           <label className="hidden"> Daytime: </label>
           <br />
          <label className="hidden" htmlFor="before work"> Before work </label>
          <label htmlFor="before work" role="img" className={`before_work ${beforeWorkChecked === true ? "selected_emoji_before" : ""}`} aria-label="before_work"> 🌅 </label>
          <input className="hidden" id="before work" name="daytime" type="radio" value="before work" onChange={handleDaytimeBefore} />
          <label className="hidden" htmlFor="after work"> After work </label>
          <label htmlFor="after work" role="img" className={`after_work ${afterWorkChecked === true ? "selected_emoji_after" : ""}`} aria-label="after_work"> 🍻 </label>
          <input className="hidden" id="after work" name="daytime" type="radio" value="after work" onChange={handleDaytimeAfter} />
        <br />
        <br />
        <div>
        <h4> Mood: </h4>
        <div className="selectMood">
          <br />
          <label className="hidden" htmlFor="excited"> Exited </label>
          <label htmlFor="excited" role="img" className={`emoji_excited ${excitedChecked === true ? "selected_emoji_excited" : ""}`} aria-label="excited">😸</label>
          <input id="excited" name="mood" type="radio" value="excited" onChange={handleMoodExcited} />
          <br />
          <label className="hidden" htmlFor="happy"> Happy </label>
          <label htmlFor="happy" role="img" className={`emoji_happy ${happyChecked === true ? "selected_emoji_happy" : ""}`} aria-label="happy"> 😺 </label>
          <input id="happy" name="mood" type="radio" value="happy" onChange={handleMoodHappy} />
          <br />
          <label className="hidden" htmlFor="neutral"> Neutral </label>
          <label htmlFor="neutral" role="img" className={`emoji_neutral ${neutralChecked === true ? "selected_emoji_neutral" : ""}`} aria-label="neutral"> 😽 </label>
          <input id="neutral" name="mood" type="radio" value="neutral" onChange={handleMoodNeutral} />
          <br />
          <label className="hidden" htmlFor="bored"> Bored </label>
          <label htmlFor="bored" role="img" className={`emoji_bored ${boredChecked === true ? "selected_emoji_bored" : ""}`} aria-label="bored"> 😼 </label>
          <input id="bored" name="mood" type="radio" value="bored" onChange={handleMoodBored} />
          <br />
          <label className="hidden" htmlFor="sad"> Sad </label>
          <label htmlFor="sad" role="img" className={`emoji_sad ${sadChecked === true ? "selected_emoji_sad" : ""}`} aria-label="sad"> 😿 </label>
          <input id="sad" name="mood" type="radio" value="sad" onChange={handleMoodSad} /> 
          <br />
          <label className="hidden" htmlFor="depressed"> Depressed </label>
          <label htmlFor="depressed" role="img" className={`emoji_depressed ${depressedChecked === true ? "selected_emoji_depressed" : ""}`} aria-label="depressed"> 😹  </label>
          <input id="depressed" name="mood" type="radio" value="depressed" onChange={handleMoodDepressed} />
        </div>
        </div>
        <br />
        <button className="a-button" type="submit">Save</button>
        <br />
        <br />
        <a className="a-button" href="/myMoods">My moodboard</a>
        <br />
        <br />
        <a className="a-button" href="/Profile">Back to Profile</a>
        <br />
        <br />
        <a className="a-button" href="/SignupPage">Logout</a>
      </form>
    </div>
  );
}

export default AddMood;