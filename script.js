const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function toggleTheme() {
  const isDarkMode = root.classList.contains("dark-mode");

  if (isDarkMode) {
    root.classList.remove("dark-mode");
    themeToggle.textContent = "Сменить на тёмную тему";
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark-mode");
    themeToggle.textContent = "Сменить на светлую тему";
    localStorage.setItem("theme", "dark");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    root.classList.add("dark-mode");
    themeToggle.textContent = "Сменить на светлую тему";
  } else {
    root.classList.remove("dark-mode");
    themeToggle.textContent = "Сменить на тёмную тему";
  }
});

themeToggle.addEventListener("click", toggleTheme);
