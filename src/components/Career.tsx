import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Executive</h4>
                <h5>Enigma Software Solutions</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Managing client correspondence, overseeing sales pipelines across all channels, and leading a team of sales reps to achieve quarterly growth targets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Coordinator</h4>
                <h5>Genesis Engineering</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Maintained sales pipelines, prepared daily work agendas, and conducted daily/weekly call reporting. Adapted strategies for B2B, B2C, and C2C clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;