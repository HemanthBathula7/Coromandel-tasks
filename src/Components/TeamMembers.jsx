import React from 'react'
import './TeamMembers.css';

function TeamMembers({ members }) {
  return (
    <div className="team-members">
        <h1>We're Super Professional At Our Skills</h1>
        <div className="members-container">
            {members.map((member, index) => (
                    <div className="member-card" key={index}>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                       
                    </div>
            ))}
        </div>
    </div>
  )
}

export default TeamMembers;