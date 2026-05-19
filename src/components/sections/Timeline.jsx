import "./Timeline.css";

const Timeline = ({ items = [], type = "education" }) => {
  return (
    <div className="timeline">
      {items.map((item) => (
        <div className="timeline-item" key={item.id}>
          <div className="timeline-marker"></div>

          <div className="timeline-content">
            <div className="timeline-header">
              <div>
                <h3>{type === "education" ? item.degree : item.role}</h3>
                <p className="timeline-organization">
                  {type === "education" ? item.institution : item.organization}
                </p>
              </div>

              <span className="timeline-duration">{item.duration}</span>
            </div>

            {item.status && <p className="timeline-status">{item.status}</p>}
            {item.score && <p className="timeline-score">{item.score}</p>}
            {item.description && <p>{item.description}</p>}

            {item.points && (
              <ul className="timeline-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
