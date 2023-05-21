/* eslint-disable react/prop-types */
export default function HeroDetailsPage({ hero, onClose }) {
  return (
    <section className="modal-container">
      <div className="modal">
        <div
          className="modal-header"
          style={{
            backgroundImage: `
                linear-gradient(0deg, rgb(255 255 255 / 0%) 60%, rgb(0 0 0 / 100%)),
                linear-gradient(90deg, rgb(255 255 255 / 0%) 90%, rgb(0 0 0 / 100%)),
                linear-gradient(180deg, rgb(255 255 255 / 0%) 60%, rgb(0 0 0 / 100%)),
                linear-gradient(270deg, rgb(255 255 255 / 0%) 90%, rgb(0 0 0 / 100%)),
                url('${hero.image}')`,
          }}
        >
          <button onClick={onClose} className="back-button">
            <div className="back-arrow"></div>
            <div>Back to All Hero</div>
          </button>
          <div className="modal-header-text">
            {hero.name}
            <div className="modal-header-text-small">({hero.series})</div>
          </div>
        </div>
        <div className="modal-content">
          <img src={hero.icon} alt={hero.name} className="hero-illustration" />
          <div>
            <h1>About {hero.name}</h1>
            <p className="hero-description">{hero.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
