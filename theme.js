let darkThemeURL = "https://bootswatch.com/4/darkly/bootstrap.min.css";
let lightThemeURL = "https://bootswatch.com/4/minty/bootstrap.min.css";

const linktag = document.getElementById("dark-theme-style");
const themeToggler= document.getElementById("theme-toggler");

let isDark = false;

function enableDarkTheme() {
    linktag.setAttribute("href",darkThemeURL);
    themeToggler.innerText="🌞";
}

function enableLightTheme() {
    linktag.setAttribute("href", lightThemeURL);
    themeToggler.innerText="🌚";
    
}

function toggleTheme() {
    if (isDark){
        isDark = false;
        enableLightTheme();
    } else {
        isDark = true;
        enableDarkTheme();
    }
    
}