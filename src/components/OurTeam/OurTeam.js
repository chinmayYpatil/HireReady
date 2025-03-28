import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
  const teamMembers = [
    { name: 'AADITYA PRAKASH', role: 'Backend Dev' },
    { name: 'CHINMAY PATIL', role: 'Backend Dev' },
    { name: 'RAJAS DEV', role: 'Frontend Dev' },
    { name: 'YASH PATEL', role: 'designer' },
    { name: 'DHYEY PATEL', role: 'designer' },
    
  ];

  return (
    <section className="our-team">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image-placeholder"></div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <div className="our-journey">
        <a href="#journey">~ Our Journey</a>
      </div>
    </section>
  );
};

export default OurTeam;