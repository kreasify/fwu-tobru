document.addEventListener("DOMContentLoaded", function () {
  const themes = ["green", "blue", "lemon", "red"];
  let currentTheme = getCookie("theme") || "green";

  function toggleTheme() {
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    currentTheme = themes[nextIndex];
    document.documentElement.setAttribute("data-theme", currentTheme);
    setCookie("theme", currentTheme, 365);
  }

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
    }
    return null;
  }

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  themeToggleBtn.addEventListener("click", function () {
    toggleTheme();
    themeToggleBtn.setAttribute("aria-label", "Toggle " + currentTheme);
    themeToggleBtn.setAttribute("title", "Toggle " + currentTheme);
  });
});
