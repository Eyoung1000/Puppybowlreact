import React from 'react';

const PlayerDetails = ({ player }) => {
  return (
    <div className="player-details">
      <h1>Player Details</h1>
      <p><strong>Name:</strong> {player.name}</p>
      <p><strong>Position:</strong> {player.position}</p>
      <p><strong>Team:</strong> {player.team}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlayerDetails;
