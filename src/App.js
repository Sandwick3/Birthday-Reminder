import React, { useState } from 'react';
import './App.css';

function App() {
  const [friendsData, setFriendsData] = useState([
    {
      name: 'Ying Won',
      age: 29, 
      imageSrc: "./img/a1-min.jpg",
    },
    {
      name: 'Lil Sporty',
      age: 32,
      imageSrc: "./img/3-min.jpg",
    },
    {
      name: 'Glannie Mae',
      age: 20,
      imageSrc: "./img/2-min.jpg",
    },
    {
      name: 'Gwen Stacy',
      age: 18,
      imageSrc: "./img/5-min.jpg",
    },
    {
      name: 'Lee Ji-eun',
      age: 30,
      imageSrc: "./img/IU.jpg",
    }
  ]);

  // Function to clear the friendsData
  const clearFriendsData = () => {
    setFriendsData([]);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 style={{ fontSize: '15px' }}>24 birthdays today</h1>

        <div className="container-alt">
          <div className="friends-list">
            {friendsData.map((friend, index) => (
              <div key={index} className="friend">
                <div className="profile-picture">
                  <img src={friend.imageSrc} alt={friend.name} />
                </div>
                <div className="friend-details">
                  <p className="friend-name">{friend.name}</p>
                  <p className="friend-age" style={{ fontSize: '9px' }}>{friend.age} years old</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="bottom-button" onClick={clearFriendsData}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
