const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");

function updateThemeToggle() {
    const isDark = document.documentElement.classList.contains("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
}

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeToggle();
});

updateThemeToggle();
