import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyMoods = () => {
  const [moods, setMoods] = useState([]);

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
      <h1> My mood-collection: </h1>
      <ul className="showMoods">
      {moods.map((mood) => {
        return (
            <li key={mood._id}>{getEmojiForMood(mood.mood)}</li>
        )
      }
      )}
      </ul>
      <br />
      <h2> Before work: </h2>
      <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.daytime === "before work") {
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)
        }
      }
      )}
      </ul>
      <h2> After work: </h2>
      <ul className="showMoods">
      {moods.map((mood) => {
        if (mood.daytime === "after work") {
            return (<li key={mood._id}>{getEmojiForMood(mood.mood)}</li>)
        }
      }
      )}
      </ul>
      <br />
    <button><a href="/Profile">Back to Profile</a></button>
    <br />
    <button><a href="/SignupPage">Logout</a></button>
    </div>
  );

  function getEmojiForMood(mood) {
    switch (mood) {
        case "exited":
        return "🤩";
        case "happy":
        return "😊";
        case "neutral":
        return "😶";
        case "bored":
        return "🥱";
        case "sad":
        return "😞";
        case "depressed":
        return "😭";
      default:
        return "";
    }
  }
}

export default MyMoods;