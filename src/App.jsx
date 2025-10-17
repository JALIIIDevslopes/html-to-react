import React from "react";
import "./style.css";
import Header from "./Header";
import CharacterRatingsTable from "./CharacterRatingsTable";
import CharacterCardsSection from "./CharacterCardsSection";
import data from "./fma-data"; 

function App() {

  const sortedByVotes = [...data].sort((a, b) => b.votes - a.votes);

  return (
    <>
      <Header />
      <CharacterRatingsTable characters={sortedByVotes.slice(0, 5)} />
      <CharacterCardsSection characters={data} />
    </>
  );
}

export default App;