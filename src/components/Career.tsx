import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        {/* Skills & Tools Section */}
        <div className="career-skills">
          <h3 className="career-skills-title">Skills &amp; Tools</h3>
          <div className="career-skills-grid">
            <div className="career-skill-group">
              <h5>Sales & Business</h5>
              <div className="career-skill-tags">
                <span>Lead Generation</span>
                <span>Client Management</span>
                <span>Sales Pipeline</span>
                <span>B2B / B2C / C2C</span>
                <span>Business Development</span>
                <span>Market Research</span>
              </div>
            </div>
            <div className="career-skill-group">
              <h5>Tools & Platforms</h5>
              <div className="career-skill-tags">
                <span>LinkedIn Sales Navigator</span>
                <span>Apollo.io</span>
                <span>RocketReach</span>
                <span>Seamless.ai</span>
                <span>CRM Systems</span>
                <span>Trello</span>
                <span>Slack</span>
                <span>Google Workspace</span>
              </div>
            </div>
            <div className="career-skill-group">
              <h5>Soft Skills</h5>
              <div className="career-skill-tags">
                <span>Negotiation</span>
                <span>Communication</span>
                <span>Problem Solving</span>
                <span>Team Leadership</span>
                <span>Call Reporting</span>
                <span>Strategic Planning</span>
              </div>
            </div>
          </div>
        </div>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Enigma */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Executive</h4>
                <h5>Enigma Software Solutions</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Managing client correspondence and overseeing sales pipelines across all channels. Leading a team of sales reps, setting KPIs, and driving quarterly growth targets. Handling B2B outreach strategy and building long-term client relationships.
            </p>
          </div>

          {/* Genesis Engineering */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Coordinator</h4>
                <h5>Genesis Engineering</h5>
              </div>
              <h3>2024 – 2025</h3>
            </div>
            <p>
              Maintained and optimized sales pipelines, prepared daily work agendas, and conducted daily/weekly call reporting. Adapted outreach strategies tailored to B2B, B2C, and C2C clients. Coordinated between sales reps and management for seamless operations.
            </p>
          </div>

          {/* Servixer */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Developer</h4>
                <h5>Servixer</h5>
              </div>
              <h3>2023 – 2024</h3>
            </div>
            <p>
              Identified and pursued new business opportunities through targeted outreach on LinkedIn, Apollo, and RocketReach. Developed proposals, negotiated contracts, and onboarded new clients. Played a key role in expanding the company's client base in international markets.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;