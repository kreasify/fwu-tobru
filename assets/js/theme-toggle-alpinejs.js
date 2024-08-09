function themeToggle() {
  return {
    themes: ["green", "blue", "lemon", "red"],
    current: "green",
    get nextTheme() {
      const currentIndex = this.themes.indexOf(this.current);
      const nextIndex = (currentIndex + 1) % this.themes.length;
      return this.themes[nextIndex];
    },
    toggleTheme() {
      const currentIndex = this.themes.indexOf(this.current);
      const nextIndex = (currentIndex + 1) % this.themes.length;
      this.current = this.themes[nextIndex];
      document.documentElement.setAttribute("data-theme", this.current);
      this.setCookie("theme", this.current, 365);
    },
    init() {
      const savedTheme = this.getCookie("theme");
      this.current = savedTheme || "green";
      document.documentElement.setAttribute("data-theme", this.current);
    },
    setCookie(name, value, days) {
      const d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    },
    getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
  };
}
