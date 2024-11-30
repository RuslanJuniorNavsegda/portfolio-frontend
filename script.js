const projects = [
  {
    title: "Сайт интернет-магазин",
    description: "Разработан на чистом HTML, CSS и JS. Адаптивный дизайн.",
    link: "https://example.com/project1",
  },
  {
    title: "Трекер задач",
    description: "React-приложение с сохранением задач.",
    link: "https://example.com/project2",
  },
  {
    title: "Резюме сайт",
    description: "Интерактивное портфолио с современным дизайном.",
    link: "https://example.com/project3",
  },
];

const projectList = document.querySelector(".project-list");

projects.forEach((project) => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");
  projectItem.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">Посмотреть</a>
    `;
  projectList.appendChild(projectItem);
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "light-theme" ? "🌙" : "🌞";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.classList.contains("light-theme")
    ? "light-theme"
    : "dark-theme";

  document.body.classList.add("theme-transition");
  setTimeout(() => {
    if (currentTheme === "light-theme") {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      themeToggle.textContent = "🌞";
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      themeToggle.textContent = "🌙";
      localStorage.setItem("theme", "light-theme");
    }
  }, 300);
});
