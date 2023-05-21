import { useState } from "react";
import "./App.css";
import HeroCard from "./components/HeroCard";
import HeroDetailsPage from "./components/HeroDetailsPage";
import heroes from "./herolist.json";

function App() {
  const [selectedHero, setSelectedHero] = useState(null);
  const onCardClick = (hero) => () => {
    setSelectedHero(hero);
  };
  return (
    <>
      <section className="container">
        <h1 className="header">Legends of Games</h1>
        <div className="small-cards-container">
          {heroes.map((hero) => (
            <HeroCard
              key={hero.name}
              src={hero.image}
              name={hero.name}
              series={hero.series}
              onCardClick={onCardClick(hero)}
            />
          ))}
        </div>
      </section>
      {selectedHero && (
        <HeroDetailsPage
          hero={selectedHero}
          onClose={() => setSelectedHero(null)}
        />
      )}
    </>
  );
}

export default App;
