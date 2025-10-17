
import React from "react";
import "./character-ratings.css";

export default function CharacterRatingsTable({ characters }) {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char, idx) => (
            <tr key={char.name} className={idx % 2 === 0 ? "light" : "dark"}>
              <td>
                {char.name}
                {char.nickName ? ` "${char.nickName}"` : ""}
              </td>
              <td>{char.skillset.join(", ")}</td>
              <td>{char.votes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}