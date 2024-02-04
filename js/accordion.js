let accordion = document.querySelectorAll("div.wrapper>main>div.disclaimer>div.accordion>div.accordion");
let accordion_title = document.querySelectorAll("div.wrapper>main>div.disclaimer>div.accordion>div.accordion>p.accordion_title");
let span_p = document.querySelectorAll("div.wrapper>main>div.disclaimer>div.accordion>div.accordion>div>p>span");
let item1 = document.querySelectorAll('div.wrapper>main>div.disclaimer>div.accordion>div.accordion>div[class*="_1"]');
let item2 = document.querySelectorAll('div.wrapper>main>div.disclaimer>div.accordion>div.accordion>div[class*="_2"]');

accordion_title.forEach((Item, index) => {
    Item.addEventListener("click", () => {
        accordion.forEach((item, i) => {
            if (i === index)
                item.classList.toggle("show");
            if(item.classList.contains("show"))
                item.style.height = "30px";
            else
                item.removeAttribute("style");
        });
    });
});

span_p[0].addEventListener("click", () => {
    item1[0].style = "display: none;";
    item2[0].style = "display: block";
});

span_p[2].addEventListener("click", () => {
    item1[0].removeAttribute("style");
    item2[0].removeAttribute("style");
});

span_p[3].addEventListener("click", () => {
    item1[1].style = "display: none;";
    item2[1].style = "display: block";
});

span_p[4].addEventListener("click", () => {
    item1[1].removeAttribute("style");
    item2[1].removeAttribute("style");
});

span_p[5].addEventListener("click", () => {
    item1[2].style = "display: none;";
    item2[2].style = "display: block";
});

span_p[7].addEventListener("click", () => {
    item1[2].removeAttribute("style");
    item2[2].removeAttribute("style");
});

span_p[8].addEventListener("click", () => {
    item1[3].style = "display: none;";
    item2[3].style = "display: block";
});

span_p[9].addEventListener("click", () => {
    item1[3].removeAttribute("style");
    item2[3].removeAttribute("style");
});

span_p[10].addEventListener("click", () => {
    item1[4].style = "display: none;";
    item2[4].style = "display: block";
});

span_p[11].addEventListener("click", () => {
    item1[4].removeAttribute("style");
    item2[4].removeAttribute("style");
});

span_p[12].addEventListener("click", () => {
    item1[5].style = "display: none;";
    item2[5].style = "display: block";
});

span_p[13].addEventListener("click", () => {
    item1[5].removeAttribute("style");
    item2[5].removeAttribute("style");
});

span_p[14].addEventListener("click", () => {
    item1[6].style = "display: none;";
    item2[6].style = "display: block";
});

span_p[15].addEventListener("click", () => {
    item1[6].removeAttribute("style");
    item2[6].removeAttribute("style");
});

span_p[16].addEventListener("click", () => {
    item1[7].style = "display: none;";
    item2[7].style = "display: block";
});

span_p[17].addEventListener("click", () => {
    item1[7].removeAttribute("style");
    item2[7].removeAttribute("style");
});

span_p[18].addEventListener("click", () => {
    item1[8].style = "display: none;";
    item2[8].style = "display: block";
});

span_p[19].addEventListener("click", () => {
    item1[8].removeAttribute("style");
    item2[8].removeAttribute("style");
});

span_p[20].addEventListener("click", () => {
    item1[9].style = "display: none;";
    item2[9].style = "display: block";
});

span_p[22].addEventListener("click", () => {
    item1[9].removeAttribute("style");
    item2[9].removeAttribute("style");
});

