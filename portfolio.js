console.log("Portfolio Loaded");

/* SKILLS */

const skills = {
  language: [
    {
      name: "HTML",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      exp: "AI 스터디 멘토 웹사이트 'Studit'의 구조 설계 및 페이지 마크업을 담당했습니다."
    },
    {
      name: "CSS",
      icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      exp: "AI 스터디 멘토 웹사이트 'Studit'의 UI/UX 및 사용자 경험 중심 디자인을 구현했습니다."
    },
    {
      name: "JavaScript",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
      exp: "타이머, 인터랙션 등 동적 기능을 구현했습니다."
    },
    {
      name: "Python",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      exp: "데이터 처리 및 AI 로직 구현에 활용했습니다."
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
      exp: "버전 관리 및 협업 프로젝트에 활용했습니다."
    },
    {
      name: "GitHub",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
      exp: "코드 공유 및 프로젝트 관리에 사용했습니다."
    },
    {
      name: "Figma",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      exp: "UI/UX 디자인 및 프로토타입 제작 경험이 있습니다."
    },
    {
      name: "Linux",
      icon: "https://cdn-icons-png.flaticon.com/512/226/226772.png",
      exp: "기본적인 리눅스 명령어 및 서버 환경 사용 경험이 있습니다."
    }
  ]
};

function showCategory(category) {
  const container = document.getElementById("skills-container");
  const expBox = document.getElementById("experience-box");

  if (!container) return;

  container.innerHTML = "";
  expBox.style.display = "none";

  skills[category].forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill-box";

    div.innerHTML = `
      <img src="${skill.icon}">
      <p>${skill.name}</p>
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

showCategory("language");

/* 스크롤 따라 변경 - AI 사용 */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollY >= sectionTop - 200 &&
      scrollY < sectionTop + sectionHeight - 200
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(a => {
    a.classList.remove("active");

    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});


/* 타임라인 스크롤 애니메이션 - AI 사용 */

const cards = document.querySelectorAll(".timeline-card");

function showTimeline() {
  const trigger = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;

    if (top < trigger) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);
    }
  });
}

window.addEventListener("scroll", showTimeline);
showTimeline();

const logo = document.getElementById("main-logo");
const tags = document.querySelectorAll(".tags span");
