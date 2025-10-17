import React from "react";
import "./character-cards.css";

export default function CharacterCard({ character }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{character.name}</h3>
        {character.nickName && <h4>{character.nickName}</h4>}
      </div>
       <img src={character.imageUrl} alt={character.name} />
      <p>{character.background}</p>
    </div>
  );
}