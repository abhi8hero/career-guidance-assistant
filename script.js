const lifePhase = localStorage.getItem("lifePhase");

// ---------------- QUESTION POOL ----------------
const questions = [
  // After 10th
  {id:1, phase:"After 10th", category:"interest", text:"Which subjects do you enjoy?", options:["Mathematics","Science","Arts","Commerce"]},
  {id:2, phase:"After 10th", category:"interest", text:"Which activities do you like?", options:["Problem Solving","Creative Work","Helping People","Business Activities"]},
  {id:3, phase:"After 10th", category:"skill", text:"Do you enjoy working with numbers?", options:["Yes","Sometimes","No"]},
  {id:4, phase:"After 10th", category:"skill", text:"Do you like hands-on experiments?", options:["Yes","Sometimes","No"]},
  {id:5, phase:"After 10th", category:"preference", text:"Do you prefer working alone or in a team?", options:["Alone","Team","Both"]},
  {id:6, phase:"After 10th", category:"preference", text:"Do you like to lead or follow?", options:["Lead","Follow","Both"]},
  {id:7, phase:"After 10th", category:"interest", text:"Do you enjoy technology?", options:["Yes","Somewhat","No"]},
  {id:8, phase:"After 10th", category:"interest", text:"Are you interested in business or entrepreneurship?", options:["Yes","Somewhat","No"]},

  // After 12th
  {id:9, phase:"After 12th", category:"interest", text:"Which stream did you study?", options:["Science","Commerce","Arts"]},
  {id:10, phase:"After 12th", category:"interest", text:"Do you enjoy coding or programming?", options:["Yes","Somewhat","No"]},
  {id:11, phase:"After 12th", category:"skill", text:"Are you good at problem-solving?", options:["Yes","Sometimes","No"]},
  {id:12, phase:"After 12th", category:"skill", text:"Do you enjoy designing or drawing?", options:["Yes","Sometimes","No"]},
  {id:13, phase:"After 12th", category:"preference", text:"Do you like working with people or independently?", options:["People","Alone","Both"]},
  {id:14, phase:"After 12th", category:"interest", text:"Do you enjoy business and leadership?", options:["Yes","Somewhat","No"]},
  {id:15, phase:"After 12th", category:"skill", text:"Do you like science experiments?", options:["Yes","Somewhat","No"]},
  {id:16, phase:"After 12th", category:"preference", text:"Do you prefer practical or theory work?", options:["Practical","Theory","Both"]},

  // Graduation
  {id:17, phase:"Graduation", category:"interest", text:"What is your strongest skill?", options:["Technical","Communication","Creativity","Leadership"]},
  {id:18, phase:"Graduation", category:"interest", text:"Which field excites you most?", options:["Technology","Business","Arts","Research"]},
  {id:19, phase:"Graduation", category:"skill", text:"Do you enjoy problem solving?", options:["Yes","Sometimes","No"]},
  {id:20, phase:"Graduation", category:"skill", text:"Are you comfortable leading a team?", options:["Yes","Sometimes","No"]},
  {id:21, phase:"Graduation", category:"preference", text:"Do you prefer working independently or in teams?", options:["Independently","Team","Both"]},
  {id:22, phase:"Graduation", category:"interest", text:"Do you enjoy technology and coding?", options:["Yes","Somewhat","No"]},
  {id:23, phase:"Graduation", category:"preference", text:"Do you like working in fast-paced environments?", options:["Yes","Somewhat","No"]},
  {id:24, phase:"Graduation", category:"skill", text:"Are you interested in research or innovation?", options:["Yes","Somewhat","No"]},

  // Career Switch / Exploring
  {id:25, phase:"Career Switch", category:"interest", text:"What skills do you want to develop?", options:["Technical","Creative","Business","Communication"]},
  {id:26, phase:"Career Switch", category:"preference", text:"Do you prefer self-employment or job?", options:["Self-employment","Job","Both"]},
  {id:27, phase:"Career Switch", category:"skill", text:"Are you willing to learn new skills?", options:["Yes","Somewhat","No"]},
  {id:28, phase:"Career Switch", category:"interest", text:"Do you like working with people?", options:["Yes","Somewhat","No"]},
  {id:29, phase:"Career Switch", category:"preference", text:"Do you want to change industry?", options:["Yes","Maybe","No"]},
  {id:30, phase:"Career Switch", category:"interest", text:"Do you enjoy problem-solving?", options:["Yes","Somewhat","No"]}
];

// ---------------- CAREER RULES ----------------
const careerRules = [
  {name:"Social Media Influencer", tags:["Creativity","Problem Solving","leadership","Science","Design","Technology","Communication","Business"], phase:["After 10th","After 12th","Graduation","Career Switch"], roadmap:["Create Social Media Account", "Daily posts", "Let People Know You", "Self Promotion"], skills:["Creativity","Deep Diving", "Observation", "People Psycology", "Communication"]},
  {name:"Indian Defence System", tags:["Technology","Problem Solving","leadership","Science","Technology","Communication","Helping People"], phase:["After 10th","After 12th","Graduation"], roadmap:["Make physical fitness and mental strong", "Entry through- Self, academy, NDA, etc", "Career in- Army, Navy, AirForce, Police, etc", "Clere entrance requirements"], skills:["Natural Adaptation", "Observation", "Discipline", "Communication","High Confidence and Guts"]},
  {name:"Civil Services", tags:["Technology","Problem Solving","leadership","Science","Technology","Communication","Helping People"], phase:["After 10th","After 12th","Graduation","Career Switch"], roadmap:["Make physical fitness and mental strong", "Entry through- Self, Coaching, etc", "Clere Exams within age limit -MPSC,UPSE, etc", "Clere interview"], skills:["Consistency", "Observation", "Discipline", "Communication","Patience"]},
  {name:"Software Engineer", tags:["Technology","Mathematics","Problem Solving"], phase:["After 10th","After 12th","Graduation"], roadmap:["Degree in CS","Learn Programming","Build Projects","Apply for jobs"], skills:["Programming","Problem Solving","Logical Thinking","Teamwork"]},
  {name:"UI/UX Designer", tags:["Creativity","Design","Technology","Technical"], phase:["After 10th","After 12th","Graduation","Career Switch"], roadmap:["Learn Design Tools","Online Courses","Create Portfolio","Apply for internships"], skills:["Creativity","Design Thinking","Wireframing","User Research"]},
  {name:"Healthcare Professional", tags:["Biology","Helping People","Science","Technical","Communication"], phase:["After 10th","After 12th","Graduation"], roadmap:["Pursue Medical Courses / degree like MBBS,BAMS","Internships","Residency/Training","Apply for roles"], skills:["Empathy","Observation","Problem Solving","Communication"]},
  {name:"Business & Management", tags:["Business","Leadership","Communication","Finance"], phase:["After 10th","After 12th","Graduation","Career Switch"], roadmap:["Degree in Business / MBA","Learn Finance & Marketing","Internships","Networking"], skills:["Leadership","Communication","Strategy","Time Management"]},
 ];

// ---------------- TAG MAPPING ----------------
const tagMap = {
  "Science":["Science","Mathematics","Biology"],
  "Maths":["Mathematics","Technology"],
  "Biology":["Hands-on","Communication"],
  "Arts":["Creativity","Design"],
  "Commerce":["Business","Finance"],
  "Yes":["Problem Solving","Technical","Mathematics"],
  "Sometimes":["Problem Solving"],
  "No":["Observation"],
  "Practical":["Technical","Hands-on"],
  "Theory":["Analytical","Problem Solving"],
  "Both":["Problem Solving","Technical","Analytical","Teamwork","Independent Work"],
  "People":["Leadership","Communication","Biology"],
  "Alone":["Independent Work"],
  "Team":["Teamwork","Collaboration"],
  "Independently":["Independent Work"],
  "Lead":["Leadership","Communication"],
  "Follow":["Teamwork","Analytical"]
};

// ---------------- FILTER + SHUFFLE ----------------
let phaseQuestions = questions.filter(q => q.phase === lifePhase);
const categories = ["interest","skill","preference"];
let orderedQuestions = [];

categories.forEach(cat => {
  const q = phaseQuestions.filter(qq => qq.category === cat);
  shuffle(q);
  orderedQuestions = [...orderedQuestions,...q];
});
phaseQuestions = orderedQuestions;

// ---------------- VARIABLES ----------------
let index = 0;
let answers = [];

const chatBody = document.getElementById("chatBody");
const optionsDiv = document.getElementById("options");

// ---------------- UTILITY FUNCTIONS ----------------
function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
}

function botMessage(text){
  const div = document.createElement("div");
  div.className = "bot-msg";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function userMessage(text){
  const div = document.createElement("div");
  div.className = "user-msg";
  div.innerText = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// ---------------- PROGRESS ----------------
function updateProgress(){
  const bar = document.getElementById("progressBar");
  const percent = ((index)/phaseQuestions.length)*100;
  bar.style.width = percent + "%";
}

// ---------------- QUESTION FLOW ----------------
function showQuestion(){
  updateProgress();

  if(index >= phaseQuestions.length){
    botMessage("Analyzing your answers... 🔍");
    const userTags = extractTags(answers);
    const matches = matchCareers(userTags, lifePhase);
    localStorage.setItem("careerMatches", JSON.stringify(matches));
    setTimeout(()=>{ window.location.href="results.html"; },1500);
    optionsDiv.innerHTML = "";
    return;
  }

  const q = phaseQuestions[index];
  botMessage(q.text);
  optionsDiv.innerHTML = "";
  q.options.forEach(option=>{
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = ()=> selectAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(option){
  userMessage(option);
  answers.push({questionId:phaseQuestions[index].id,answer:option});
  index++;
  setTimeout(showQuestion,500);
}

// ---------------- TAG EXTRACTION ----------------
function extractTags(answers){
  let tags=[];
  answers.forEach(a=>{
    if(tagMap[a.answer]){
      tags.push(...tagMap[a.answer]);
    } else {
      tags.push(a.answer);
    }
  });
  return tags;
}

// ---------------- CAREER MATCHING ----------------
function matchCareers(userTags, lifePhase){
  let results=[];
  careerRules.forEach(career=>{
    if(!career.phase.includes(lifePhase)) return;
    let score=0;
    userTags.forEach(tag=>{
      if(career.tags.includes(tag)) score++;
    });
    results.push({career:career.name,score});
  });
  results.sort((a,b)=>b.score-a.score);
  return results;
}

// ---------------- START CHATBOT ----------------
botMessage(`Hi! I will guide you in choosing your career. 😊`);
botMessage(`You selected: ${lifePhase}`);
showQuestion();
