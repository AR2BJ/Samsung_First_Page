let backdrop = document.querySelector("div.wrapper>div.backdrop");
let slider = document.querySelectorAll('div.wrapper>main>div[class^="slider"]');
let menu_1 = document.querySelectorAll("div.wrapper>header>div.menu_bar>div.menu>div.main_menu>nav>ul>li");
let menu_2 = document.querySelectorAll("div.wrapper>header>div.menu_bar>div.menu>div.link>ul>li");
let menu_3 = document.querySelectorAll("div.wrapper>header>div.menu_bar>div.icon>div.icon");

menu_1.forEach((e) => {
    e.addEventListener("mouseover", () => {
        slider.forEach((item) => item.style = "z-index: -1;");
        backdrop.style = "opacity: .68; z-index: 1;";
    });
    e.addEventListener("mouseout", () => {
        slider.forEach((item) => item.style = "z-index: 1;");
        backdrop.removeAttribute("style");
    });
});


menu_2.forEach((e) => {
    e.addEventListener("mouseover", () => {
        slider.forEach((item) => item.style = "z-index: -1;");
        backdrop.style = "opacity: .68; z-index: 1;";
    });
    e.addEventListener("mouseout", () => {
        slider.forEach((item) => item.style = "z-index: 1;");
        backdrop.removeAttribute("style");
    });
});


menu_3[2].addEventListener("mouseover", () => {
    slider.forEach((item) => item.style = "z-index: -1;");
});

menu_3[2].addEventListener("mouseout", () => {
    slider.forEach((item) => item.style = "z-index: 1;");
});