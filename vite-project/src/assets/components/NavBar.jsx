import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPlayers } from '../../api'; // Make sure to import your fetch function here

function Navbar() {
  const [playerNames, setPlayerNames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchAllPlayers();
        if (response && response.success) {
          const players = response.data.players;
          const names = players.map(player => player.name);
          setPlayerNames(names);
        } else {
          console.error('Error fetching player names');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/someURL">To Home</Link>
        </li>
        {playerNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
