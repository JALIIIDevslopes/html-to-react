import React, { Component } from "react";
import "./character-cards.css";
import CharacterCard from "./CharacterCard";

class CharacterCardsSection extends Component {
  render() {
    const { characters } = this.props;
    return (
      <section id="character-cards">
        {characters.map((char) => (
          <CharacterCard key={char.name} character={char} />
        ))}
      </section>
    );
  }
}

export default CharacterCardsSection;