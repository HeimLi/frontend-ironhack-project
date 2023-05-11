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
      <h1>My Moods </h1>
      <ul>
      {moods.map((mood) => {
        return (
            <li key={mood._id}>{mood.day}</li>
        )
      }
      )}
      </ul>
    <button><a href="/SignupPage">Logout</a></button>
    <br />
    <button><a href="/Profile">Back to Profile</a></button>
    </div>
  );
}

export default MyMoods;