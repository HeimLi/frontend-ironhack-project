import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useContext} from 'react';
import {AuthContext} from "../context/auth.context";

// For accessing the data-base
const MyMoods = () => {
const [moods, setMoods] = useState([]);
const context = useContext(AuthContext);
const user = context.user

// counting the moods
let excitedCount = 0;
let happyCount = 0;
let neutralCount = 0;
let boredCount = 0;
let sadCount = 0;
let depressedCount = 0;

// For the analysis-button
const [showNotification, setShowNotification] = useState(false);
const [notificationMessage, setNotificationMessage] = useState('');

const handleButtonClick = () => {
    // checking variable and connect it with notification
    if ((excitedCount + happyCount) > (sadCount + depressedCount)) {
      setNotificationMessage("Happyness prevails - Enjoy jour job!");
      setShowNotification(true);}
    else if ((excitedCount + happyCount) < (sadCount + depressedCount)) {
        setNotificationMessage("Negative emotions prevail - Think about quitting your job.");
        setShowNotification(true);}
    else if (((excitedCount + happyCount) < (neutralCount + boredCount)) && ((excitedCount + happyCount) > (sadCount + depressedCount))) {
        setNotificationMessage("No need to quit! But maybe you can find something more exciting.");
        setShowNotification(true);
    } else {
      setNotificationMessage("Test");
      setShowNotification(true);
    }
  };

// accessing the database
const fetchAPI=() => {
    const day = 'exampleDay';
    const daytime = 'exampleDaytime';
    const mood = 'exampleMood';
    const token = localStorage.getItem("authToken");
    axios.get(`${process.env.REACT_APP_API_URL}/api/moods`, { headers: { Authorization: `Bearer ${token}` }})
    .then(res => {
        setMoods(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

// Mapping over the moods  
useEffect(() => {
    fetchAPI(); 
  }, 
  []);

  if(!moods){
    return <p>Loading ... </p>
  }
  if(!user) {
    return <p>Loading ... </p>
  }
  return (
    <div className="addMoodPage">
    <h3> My moodboard </h3>
    {/*Mapping over all moods*/}
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
            return (
            <li key={mood._id}>{getEmojiForMood(mood.mood)}</li>
            )
        }})}
    </ul>
    {/*Show the mood-count*/}
    <ul className="allCounts">
      <li>{excitedCount} <span className="emoji_excited"> 😸 </span></li>
      <li>{happyCount} <span className="emoji_happy"> 😺 </span></li>
      <li>{neutralCount} <span className="emoji_neutral"> 😽 </span></li>
      <li>{boredCount} <span className="emoji_bored"> 😼 </span></li>
      <li>{sadCount} <span className="emoji_sad"> 😿 </span></li>
      <li>{depressedCount} <span className="emoji_depressed"> 😹 </span></li>
    </ul>
    <br />
    {/*Start of analysis*/}
    <div>
        <button className="a-button" onClick={handleButtonClick}> Analyse all moods </button>
        <br />
        {showNotification && (<div className="notification"> 
        <br />
        <p>{notificationMessage}</p>
        <br />
        <button className="a-button" onClick={() => setShowNotification(false)}>Close</button>
    </div>
       )}
    </div>
        {/*Buttons as usual*/}
        <br />
        <a className="a-button" href="/beforeWork">Before work</a>
        <span>    </span>
        <a className="a-button" href="/afterWork">After work</a>
        <span>    </span>
        <a className="a-button" href="/addMood">Add mood</a>
        <br />
        <br />
        <br />
        <a className="a-button" href="/Profile">Back to Profile</a>
        <span>    </span>
        <a className="a-button" href="/SignupPage">Logout</a>
    </div>
  );

{/*Connecting mood-input with emoji*/}
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