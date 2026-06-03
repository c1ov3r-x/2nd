console.log("Portfolio Loaded");

const skills = {
  language: [
    {
      name: "HTML",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      exp: "AI 스터디 멘토 웹사이트 'Stduit'의 구조 설계 및 페이지 마크업을 담당했습니다."
    },
    {
      name: "CSS",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      exp: "사용자 경험을 고려한 UI 디자인 및 반응형 레이아웃을 구현했습니다."
    },
    {
      name: "JavaScript",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      exp: "타이머, 인터랙션, 동적 데이터 처리 등 다양한 기능을 구현했습니다."
    },
    {
      name: "Python",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      exp: "AI 기능 및 데이터 처리 로직 개발에 활용했습니다."
    },
    {
      name: "C++",
      icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
      exp: "알고리즘 문제 해결 및 기초 프로그래밍 능력을 강화했습니다."
    }
  ],

  tools: [
  {
    name: "Git",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    exp: "버전 관리 및 협업 프로젝트에서 사용했습니다."
  },
  {
    name: "GitHub",
    icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    exp: "프로젝트 관리 및 코드 공유를 위해 활용했습니다."
  },
  {
    name: "Figma",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    exp: "UI/UX 디자인 및 프로토타입 제작을 진행했습니다."
  },
  {
    name: "Linux",
    icon: "https://cdn-icons-png.flaticon.com/512/226/226772.png",
    exp: "리눅스 환경에서 개발 및 기본적인 명령어 사용, 서버 환경에 대한 이해를 쌓았습니다."
  }
]
};

function showCategory(category) {
  const container = document.getElementById("skills-container");
  const expBox = document.getElementById("experience-box");

  container.innerHTML = "";
  expBox.style.display = "none";

  skills[category].forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-box";

    div.innerHTML = `
      <img src="${skill.icon}">
      <div>${skill.name}</div>
    `;

    div.onclick = () => {
      expBox.style.display = "block";
      expBox.innerHTML = `
        <h3>${skill.name}</h3>
        <p>${skill.exp}</p>
      `;
    };

    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showCategory("language");
});

const cards = document.querySelectorAll(".timeline-card");

function checkScroll(){
  const trigger = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if(top < trigger){
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    }
  });
}

window.addEventListener("scroll", checkScroll);
checkScroll();