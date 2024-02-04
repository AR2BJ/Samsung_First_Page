let search_cancel = document.querySelector("div.wrapper>main>div.search>div.search_box>div.box>div.search_field>svg.search_icon_2");
let search_input = document.querySelector("div.wrapper>main>div.search>div.search_box>div.box>div.search_field>div.search_field>input");


search_input.addEventListener("focus", () => {
    search_input.value = "";
    search_input.style = "color: #000";
});

search_input.addEventListener("blur", () => {
    search_input.value = "Search Keyword";
    search_input.style = "color: #555";
});

search_input.addEventListener("input", () => search_cancel.style = "opacity: 1;visibility: visible;");

search_cancel.addEventListener("click", () => {
    search_cancel.style = "opacity: 0;visibility: hidden;";
    search_input.focus();
});