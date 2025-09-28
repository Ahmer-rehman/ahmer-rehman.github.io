'use client';

import Layout from '@/components/Layout';

export default function Education() {
  return (
    <Layout currentPage="/education">
      <div className="section">
        <div className="education-card">
          <div className="education-timeline">
            <div className="timeline-item">
              <div className="timeline-date">Feb 2020 - Jan 2024</div>
              <div className="timeline-content">
                <h2 className="institution">COMSATS University Islamabad Attock Campus</h2>
                <div className="degree-title">Bachelor of Software Engineering</div>
                <ul className="subjects-list">
                  <li>Software Engineering</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Web Development</li>
                  <li>Database Systems</li>
                  <li>Computer Networks</li>
                </ul>
                <div className="achievement">
                  <span>🏆</span>
                  <span>Graduated with Honors</span>
                </div>
                <div className="project-description">
                  Created innovative web applications using modern technologies like React, Node.js, and MongoDB. 
                  Developed a full-stack e-commerce platform that handles user authentication, product management, 
                  and payment processing. Recognized for outstanding academic performance and technical skills.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
