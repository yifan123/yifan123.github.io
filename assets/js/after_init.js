let afterInitTheme = (theme) => {
    if (theme == "dark") {
        document.getElementById("MySignImg").style.filter = "invert(100%)";
    } else {
        document.getElementById("MySignImg").style.filter = "invert(0%)";
    }
}


afterInitTheme(localStorage.getItem("theme"));
