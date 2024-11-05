import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dorian Taponzing Donfack",
      role: "Team Lead",
      gDate: "Summer 2025",
      degree: "BS in Computer Science",
      jobStatus: "Open to new opportunities",
    },
    {
      name: "Dorian Taponzing Donfack",
      role: "Team Lead",
      gDate: "Summer 2025",
      degree: "BS in Computer Science",
      jobStatus: "Open to new opportunities",
    },
    {
      name: "Dorian Taponzing Donfack",
      role: "Team Lead",
      gDate: "Summer 2025",
      degree: "BS in Computer Science",
      jobStatus: "Open to new opportunities",
    },
    {
      name: "Dorian Taponzing Donfack",
      role: "Team Lead",
      gDate: "Summer 2025",
      degree: "BS in Computer Science",
      jobStatus: "Open to new opportunities",
    },
    {
      name: "Dorian Taponzing Donfack",
      role: "Team Lead",
      gDate: "Summer 2025",
      degree: "BS in Computer Science",
      jobStatus: "Open to new opportunities",
    },
  ];

  return (
    <div id="team-container">
      <h1>Meet the Team</h1>
      <div className="flex-container">
        {teamMembers.map((member, key) => {
          return (
            <div key={key} className="member-card">
              <img src="" alt="" />
              <p>{member.name}</p>
              <p>{member.role}</p>
              <p>Graduation Date: {member.gDate}</p>
              <p>Degree: {member.degree}</p>
              <p>Job Status: {member.jobStatus}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
