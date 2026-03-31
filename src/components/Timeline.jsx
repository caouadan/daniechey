import { timelineData } from '../data/timeline';
import '../styles/timeline.css';

function Timeline() {
  return (
    <section id="timeline" className="section" aria-label="Parcours">
      <div className="container">
        <h2 className="section-title">Parcours</h2>
        <div className="timeline">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={`timeline__item timeline__item--${item.side}`}
            >
              <div className="timeline__dot" aria-hidden="true"></div>
              <div className="timeline__card">
                <div className="timeline__date">{item.date}</div>
                <p className="timeline__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
