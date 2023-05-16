import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from "../context/auth.context";


const MyMoods = () => {
const [moods, setMoods] = useState([]);

const context = useContext(AuthContext);
const user = context.user

  // console.log(moods);
  const fetchAPI=() => {
    const day = 'exampleDay';
    const daytime = 'exampleDaytime';
    const mood = 'exampleMood';
    const token = localStorage.getItem("authToken");

    axios.get("http://localhost:5005/api/moods", { headers: { Authorization: `Bearer ${token}` }})
    .then(res => {
        // console.log(res.data);
        setMoods(res.data);
        // console.log(res.data)  
        // console.log(moods);
      })
      .catch(err => {
        console.error(err);
      });
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="addMoodPage">
      <h1> My moodboard </h1>
      <h4>All moods:</h4>
      <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.user === user._id){
            return (
            <li key={mood._id}>{getEmojiForMood(mood.mood)}</li>
        )} 
      })}
      </ul>
      <br />
      <br />
      <h2> Before work: </h2>
      <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.daytime === "before work" && (mood.user === user._id)) {
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)
        }}
      )}
      </ul>
      <br />
      <h2> After work: </h2>
      <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.daytime === "after work" && (mood.user === user._id)) {
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)
        }}
      )}
      </ul>
    <button><a href="/addMood">Add mood</a></button>
    <br />
    <button><a href="/Profile">Back to Profile</a></button>
    <br />
    <button><a href="/SignupPage">Logout</a></button>
    </div>
  );

  function getEmojiForMood(mood) {
    switch (mood) {
      case "exited":
        return <span className="emoji_positive"> 😸 </span>;
      case "happy":
        return <span className="emoji_positive"> 😺 </span>;
      case "neutral":
        return <span className="emoji"> 😽 </span>;
      case "bored":
        return <span className="emoji"> 😼 </span>;
      case "sad":
        return <span className="emoji_negative"> 😿 </span>;
      case "depressed":
        return <span className="emoji_negative"> 😹 </span>;
      default:
        return null;
    }
  }
  
}

export default MyMoods;