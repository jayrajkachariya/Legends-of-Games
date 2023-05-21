/* eslint-disable react/prop-types */

export default function HeroCard({ src, name, series, onCardClick }) {
  return (
    <div
      className="small-card"
      style={{
        backgroundImage: `
        linear-gradient(322deg, rgb(255 255 255 / 0%) 60%, rgb(0 0 0 / 100%)),
        url('${src}')`,
      }}
      onClick={onCardClick}
    >
      <div className="small-card-name-container">
        <h3>{name}</h3>
      </div>
      <div className="small-card-series-container">
        <h3>{series}</h3>
      </div>
    </div>
  );
}
