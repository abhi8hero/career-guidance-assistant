const careerList = document.getElementById("careerList");

// get stored data
const matches = JSON.parse(localStorage.getItem("careerMatches")) || [];

// SAME careerRules (copy from script.js)
const careerRules = [
  {
    name: "Social Media Influencer",
    skills: ["Deep Diving", "Observation", "People Psycology", "Communication"],
    roadmap: ["Create Social Media Account", "Daily posts", "Let People Know You", "Self Promotion"],
    img: "assets/social.png",
    gradient: "linear-gradient(135deg, #7b2bdcd7, #e20a35e8)"
  },
  {
    name: "Indian Defence System",
    skills: ["Natural Adaptation", "Observation", "Discipline", "Communication","High Confidence and Guts"],
    roadmap: ["Make physical fitness and mentally strong", "Entry through- Self, academy, NDA, etc", "Career in-Army, Navy, AirForce, Police, etc", "Clere entrance requirements"],
    img: "assets/defence.png",
    gradient: "linear-gradient(135deg, #10a26fd7, #e0163ece)"
  },
  {
    name: "Civil Services",
    skills: ["Consistency", "Observation", "Discipline", "Communication","Patience"],
    roadmap: ["Make physical fitness and mental strong", "Entry through- Self, Coaching, etc", "Clere Exams within age limit -MPSC,UPSE, etc", "Clere interview"],
    img: "assets/civil.png",
    gradient: "linear-gradient(135deg, #10a26fd7, #393ff3ce)"
  },
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
    roadmap: ["Learn Design Tools", "Online Courses", "Create Portfolio", "Apply for jobs"],
    img: "assets/ux.png",
    gradient: "linear-gradient(135deg, #ff758c, #ff7eb3)"
  },
  {
    name: "Healthcare Professional",
    skills: ["Empathy", "Observation", "Problem Solving", "Communication"],
    roadmap: ["Medical Course", "Internship", "Training", "Job"],
    img: "assets/healthcare.png",
    gradient: "linear-gradient(135deg, #ff9966, #ff5e62)"
  },
  {
    name: "Business & Management",
    skills: ["Leadership", "Communication", "Strategy", "Time Management"],
    roadmap: ["Degree in Business / MBA","Learn Finance & Marketing","Internships","Networking"],
    img: "assets/business.png",
    gradient: "linear-gradient(135deg, #43cea2, #185a9d)"
  }
];

careerList.innerHTML = "";

if (matches.length === 0) {
  careerList.innerHTML = "<p>No career suggestions found. You are so special, you can learn and try in different fields. (माँ-बाप की बात मान ले बेटा, इसी में तेरी भलाई है 🙏)</p>";
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
