import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPlayers } from '../../api';
import PlayerDetails from './PlayerDetails';

const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const APIResponse = await fetchAllPlayers();
        if (APIResponse.success) {
          setPlayers(APIResponse.data.players);
        } else {
          setError(APIResponse.error.message);
        }
      } catch (error) {
        setError(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="all-players">
      <h1>All Players Competing in the Bowl</h1>
      {error ? (
        <div>Error fetching player data: {error}</div>
      ) : (
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              <strong>Name:</strong> {player.name}<br />
              <strong>Position:</strong> {player.position}<br />
              <strong>Team:</strong> {player.team}<br />
              <Link to={`/players/${player.id}`}>Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllPlayers;
