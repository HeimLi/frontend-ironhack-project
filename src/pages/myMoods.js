import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from "../context/auth.context";

const MyMoods = () => {
const [moods, setMoods] = useState([]);
const context = useContext(AuthContext);
const user = context.user

const [showNotification, setShowNotification] = useState(false);
const [notificationMessage, setNotificationMessage] = useState('');

const handleButtonClick = () => {
    // Hier wird die Variable überprüft
    if ((excitedCount + happyCount) > (sadCount + depressedCount)) {
      setNotificationMessage("Enjoy jour job!");
      setShowNotification(true);}
    else if ((excitedCount + happyCount) < (sadCount + depressedCount)) {
        setNotificationMessage("Quit your job!");
        setShowNotification(true);
    } else {
      setNotificationMessage("Test");
      setShowNotification(false);
    }
  };

let excitedCount = 0;
let happyCount = 0;
let neutralCount = 0;
let boredCount = 0;
let sadCount = 0;
let depressedCount = 0;

const fetchAPI=() => {
    const day = 'exampleDay';
    const daytime = 'exampleDaytime';
    const mood = 'exampleMood';
    const token = localStorage.getItem("authToken");
    axios.get("http://localhost:5005/api/moods", { headers: { Authorization: `Bearer ${token}` }})
    .then(res => {
        setMoods(res.data);
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
    <h3> My moodboard </h3>
    <h5> All moods: </h5>
    <ul className="showMoods">

        {moods.map((mood) => {
        if (mood.user === user._id) {
        switch (mood.mood){
            case 'excited':
                excitedCount++
                break;
            case 'happy':
                happyCount++
                break;
            case 'neutral':
                neutralCount++
                break;
            case 'bored':
                boredCount++
                break;
            case 'sad':
                sadCount++
                break;
            case 'depressed':
                depressedCount++
                break;}}  

        if (mood.user === user._id){
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)
        }})}
    </ul>

    <ul className="allCounts">
      <li>{excitedCount} <span className="emoji_excited"> 😸 </span></li>
      <li>{happyCount} <span className="emoji_happy"> 😺 </span></li>
      <li>{neutralCount} <span className="emoji_neutral"> 😽 </span></li>
      <li>{boredCount} <span className="emoji_bored"> 😼 </span></li>
      <li>{sadCount} <span className="emoji_sad"> 😿 </span></li>
      <li>{depressedCount} <span className="emoji_depressed"> 😹 </span></li>
    </ul>

    <br />

    <h5> Before work: </h5>
    <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.daytime === "before work" && (mood.user === user._id)) {
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)}
        })}
    </ul>

    <br />

    <h5> After work: </h5>
    <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.daytime === "after work" && (mood.user === user._id)) {
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)}
        })}
    </ul>

    <div>
        <button onClick={handleButtonClick}>Analysis</button>
        {showNotification && (<div className="notification"> 
            <p>{notificationMessage}</p>
        <button onClick={() => setShowNotification(false)}>Close</button>
    </div>
       )}
    </div>
        <br />
        <button><a href="/addMood">Add mood</a></button>
        <br />
        <button><a href="/Profile">Back to Profile</a></button>
        <br />
        <button><a href="/SignupPage">Logout</a></button>
    </div>
  );

function getEmojiForMood(mood) {
    switch (mood) {
        case "excited":
        return <span className="emoji_excited"> 😸 </span>;
        case "happy":
        return <span className="emoji_happy"> 😺 </span>;
        case "neutral":
        return <span className="emoji_neutral"> 😽 </span>;
        case "bored":
        return <span className="emoji_bored"> 😼 </span>;
        case "sad":
        return <span className="emoji_sad"> 😿 </span>;
        case "depressed":
        return <span className="emoji_depressed"> 😹 </span>;
        default:
        return null;
    }
  }};
  

export default MyMoods;