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
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function changeTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  setCookie("theme", theme, 7);
}

window.onload = function () {
  const savedTheme = getCookie("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  const themeChooser = document.getElementById("theme-chooser");
  themeChooser.querySelectorAll("li").forEach(function (item) {
    item.addEventListener("click", function () {
      changeTheme(this.getAttribute("data-theme"));
    });
  });
};
