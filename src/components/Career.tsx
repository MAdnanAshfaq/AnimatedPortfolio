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
                <h4>Freelance Developer</h4>
                <h5>Self-employed</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working as a freelance developer specializing in web automation
              and Chrome extension development for international clients.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Email Marketing Expert</h4>
                <h5>International Estimating LLC</h5>
              </div>
              <h3>~1 Year</h3>
            </div>
            <p>
              Managed and executed email marketing campaigns, handled outreach
              strategy, and contributed to lead generation and client
              communication for the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;