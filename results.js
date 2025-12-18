const careerList = document.getElementById("careerList");

// get stored data
const matches = JSON.parse(localStorage.getItem("careerMatches")) || [];

// SAME careerRules (copy from script.js)
const careerRules = [
  {
    name: "Software Engineer",
    skills: ["Programming", "Problem Solving", "Logical Thinking"],
    roadmap: ["Degree in Engineering", "Learn Programming", "Build Projects", "Apply for jobs"],
    img: "assets/software.png",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)"
  },
  {
    name: "UI/UX Designer",
    skills: ["Creativity", "Design Thinking", "Wireframing", "User Research"],
    roadmap: ["Learn Design Tools", "Online Courses", "Create Portfolio", "Apply"],
    img: "assets/ux.png",
    gradient: "linear-gradient(135deg, #ff758c, #ff7eb3)"
  },
  {
    name: "Business & Management",
    skills: ["Leadership", "Communication", "Strategy", "Time Management"],
    roadmap: ["Business Degree", "Internships", "MBA", "Manager"],
    img: "assets/business.png",
    gradient: "linear-gradient(135deg, #43cea2, #185a9d)"
  },
  {
    name: "Healthcare Professional",
    skills: ["Empathy", "Observation", "Problem Solving", "Communication"],
    roadmap: ["Medical Course", "Internship", "Training", "Job"],
    img: "assets/healthcare.png",
    gradient: "linear-gradient(135deg, #ff9966, #ff5e62)"
  }
];

careerList.innerHTML = "";

if (matches.length === 0) {
  careerList.innerHTML = "<p>No career suggestions found.</p>";
}

// max score → for percentage
const maxScore = Math.max(...matches.map(m => m.score), 1);

// show top 4 results
const validMatches = matches.filter(m => m.score > 0);

validMatches.slice(0, 4).forEach((m, index) => {

  const career = careerRules.find(c => c.name === m.career);
  if (!career) return;

  const percent = Math.round((m.score / maxScore) * 100);

  const card = document.createElement("div");
  card.className = "career-premium-card";
  card.style.background = career.gradient;

  card.innerHTML = `
    <div class="left-image">
      <img src="${career.img}" alt="${career.name}">
    </div>

    <div class="right-content">
      <h3>${index + 1}. ${career.name}</h3>

      <div class="percentage">
        <span>Success Probability</span>
        <div class="progress-bar">
          <div class="progress-fill" style="width:${percent}%"></div>
        </div>
        <strong>${percent}%</strong>
      </div>

      <div class="skills">
        <strong>Skills:</strong>
        <ul>
          ${career.skills.map(s => `<li>${s}</li>`).join("")}
        </ul>
      </div>

      <div class="roadmap">
        ${career.roadmap.map(step => `
          <div class="roadmap-step">
            <span>${step}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  careerList.appendChild(card);
});

function goBack() {
  window.location.href = "index.html";
}
