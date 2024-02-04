var swiper1 = new Swiper(".swiper1", {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        waitForTransition: true,
    },
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
        renderBullet: function (index, className) {
            var customClass = (index % 6 + 1);
            return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${customClass}">` +
                `<span class="pag_label">${getCustomText(index)}</span>` + `<i class="pag_main"></i>` + '<b class="pag_filler"></b>' + '</span>';
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on:{
        slideChange: function () {
            var bullet_3 = document.querySelector("div.wrapper>main>div.slider_1>div.swiper>div.swiper-pagination>span.swiper-pagination-bullet:nth-of-type(3)");
            var bullet_6 = document.querySelector("div.wrapper>main>div.slider_1>div.swiper>div.swiper-pagination>span.swiper-pagination-bullet:nth-of-type(6)");
            var i = document.querySelectorAll("div.wrapper>main>div.slider_1>div.swiper>div.swiper-pagination>span.swiper-pagination-bullet>i");
            var span = document.querySelectorAll("div.wrapper>main>div.slider_1>div.swiper>div.swiper-pagination>span.swiper-pagination-bullet>span");

            setTimeout(() => {
                if (bullet_3.classList[1] === "swiper-pagination-bullet-active"){
                    i.forEach((item) => item.style = "background-color: rgba(255, 255, 255, 0.2);");
                    span.forEach((item) => item.style = "color: #fff");
                }
                else if (bullet_6.classList[1] === "swiper-pagination-bullet-active"){
                    i.forEach((item) => item.style = "background-color: rgba(255, 255, 255, 0.2);");
                    span.forEach((item) => item.style = "color: #fff");
                }
                else {
                    i.forEach((item) => item.style = "background-color: rgba(0, 0, 0, 0.2);");
                    span.forEach((item) => item.style = "color: #000");
                }
            }, 1);
        }
    }
});

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        renderBullet: function (index_2, className) {
            var customClass = (index_2 % 6 + 1);
            return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${customClass}">` + getCustomText_2(index_2) + '<span></span></span>';
        }
    },
});

var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 4.75,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper4 = new Swiper(".swiper4", {
    slidesPerView: 1,
    speed: 500,
    slideToClickedSlide: true,
    pagination: {
        el: ".swiper-pagination4",
        clickable: true,
        renderBullet: function (index_4, className) {
            var customClass = (index_4 % 6 + 1);
            return `<span class="${className} pag-${customClass}" tabindex="0" role="button" aria-label="Go to slide ${customClass}"><span class="pag_item_4">` + getCustomText_4(index_4) + '<i class="pag_underline_4"></i></span></span>';
        }
    },
    on: {
        slideChange: function () {
            var activeIndex = swiper4.activeIndex;
            var paginationBullets = document.querySelectorAll('div.wrapper>main>div.slider_4>div.swiper-pagination>span.swiper-pagination-bullet');
            var title = document.querySelector(".slider_4_title");
            var pag = document.querySelectorAll(".pag_item_4");
            var pag_underline = document.querySelectorAll(".pag_underline_4");
            if (activeIndex === 2) {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[2].style = "background-color: #fff; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[3].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[4].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            } else {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[2].style = "background-color: #000; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[3].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[4].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            }
            paginationBullets.forEach(function (bullet, index) {
                bullet.addEventListener('click', function () {
                    swiper4.slideTo(index);
                });
            });
            var slide_box = document.querySelectorAll("div.wrapper>main>div.slider_4>div.swiper>div.swiper-wrapper>div.swiper-slide>div.slide_box");
            var previousIndex = swiper4.previousIndex;
            var activeIndex = swiper4.activeIndex;
            var targetBox = slide_box[activeIndex];
            if (previousIndex === (activeIndex + 1) && activeIndex === (previousIndex - 1)) {
                targetBox.classList.add("left_animate");
                setTimeout(function () {
                    targetBox.classList.remove('left_animate');
                }, 1000);
            }
            if (previousIndex === (activeIndex - 1) && activeIndex === (previousIndex + 1)) {
                targetBox.classList.add("right_animate");
                setTimeout(function () {
                    targetBox.classList.remove('right_animate');
                }, 1000);
            }
        },
    },
});

var swiper5 = new Swiper(".swiper5", {
    slidesPerView: 1,
    speed: 500,
    slideToClickedSlide: true,
    pagination: {
        el: ".swiper-pagination5",
        clickable: true,
        renderBullet: function (index_5, className) {
            var customClass = (index_5 % 6 + 1);
            return `<span class="${className} pag-${customClass}" tabindex="0" role="button" aria-label="Go to slide ${customClass}"><span class="pag_item_5">` + getCustomText_5(index_5) + '<i class="pag_underline_5"></i></span></span>';
        }
    },
    on: {
        slideChange: function () {
            var activeIndex = swiper5.activeIndex;
            var paginationBullets = document.querySelectorAll('div.wrapper>main>div.slider_5>div.swiper-pagination>span.swiper-pagination-bullet');
            var title = document.querySelector(".slider_5_title");
            var pag = document.querySelectorAll(".pag_item_5");
            var pag_underline = document.querySelectorAll(".pag_underline_5");
            if (activeIndex === 0) {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[0].style = "background-color: #fff; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            } else if (activeIndex === 2) {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[2].style = "background-color: #fff; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            } else {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[1].style = "background-color: #000; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            }
            paginationBullets.forEach(function (bullet, index) {
                bullet.addEventListener('click', function () {
                    swiper5.slideTo(index);
                });
            });
            var slide_box = document.querySelectorAll("div.wrapper>main>div.slider_5>div.swiper>div.swiper-wrapper>div.swiper-slide>div.slide_box");
            var previousIndex = swiper5.previousIndex;
            var activeIndex = swiper5.activeIndex;
            var targetBox = slide_box[activeIndex];
            if (previousIndex === (activeIndex + 1) && activeIndex === (previousIndex - 1)) {
                targetBox.classList.add("left_animate");
                setTimeout(function () {
                    targetBox.classList.remove('left_animate');
                }, 1000);
            }
            if (previousIndex === (activeIndex - 1) && activeIndex === (previousIndex + 1)) {
                targetBox.classList.add("right_animate");
                setTimeout(function () {
                    targetBox.classList.remove('right_animate');
                }, 1000);
            }
        },
    },
});

var swiper6 = new Swiper(".swiper6", {
    slidesPerView: 1,
    speed: 500,
    slideToClickedSlide: true,
    pagination: {
        el: ".swiper-pagination6",
        clickable: true,
        renderBullet: function (index_6, className) {
            var customClass = (index_6 % 6 + 1);
            return `<span class="${className} pag-${customClass}" tabindex="0" role="button" aria-label="Go to slide ${customClass}"><span class="pag_item_6">` + getCustomText_6(index_6) + '<i class="pag_underline_6"></i></span></span>';
        }
    },
    on: {
        slideChange: function () {
            var activeIndex = swiper6.activeIndex;
            var paginationBullets = document.querySelectorAll('div.wrapper>main>div.slider_6>div.swiper-pagination>span.swiper-pagination-bullet');
            var title = document.querySelector(".slider_6_title");
            var pag = document.querySelectorAll(".pag_item_6");
            var pag_underline = document.querySelectorAll(".pag_underline_6");
            if (activeIndex === 0) {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[0].style = "background-color: #000; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            } else if (activeIndex === 2) {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[2].style = "background-color: #fff; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            } else {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[2].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[1].style = "background-color: #fff; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            }
            paginationBullets.forEach(function (bullet, index) {
                bullet.addEventListener('click', function () {
                    swiper6.slideTo(index);
                });
            });
            var slide_box = document.querySelectorAll("div.wrapper>main>div.slider_6>div.swiper>div.swiper-wrapper>div.swiper-slide>div.slide_box");
            var previousIndex = swiper6.previousIndex;
            var activeIndex = swiper6.activeIndex;
            var targetBox = slide_box[activeIndex];
            if (previousIndex === (activeIndex + 1) && activeIndex === (previousIndex - 1)) {
                targetBox.classList.add("left_animate");
                setTimeout(function () {
                    targetBox.classList.remove('left_animate');
                }, 1000);
            }
            if (previousIndex === (activeIndex - 1) && activeIndex === (previousIndex + 1)) {
                targetBox.classList.add("right_animate");
                setTimeout(function () {
                    targetBox.classList.remove('right_animate');
                }, 1000);
            }
        },
    },
});

var swiper7 = new Swiper(".swiper7", {
    slidesPerView: 1,
    speed: 500,
    slideToClickedSlide: true,
    pagination: {
        el: ".swiper-pagination7",
        clickable: true,
        renderBullet: function (index_7, className) {
            var customClass = (index_7 % 6 + 1);
            return `<span class="${className} pag-${customClass}" tabindex="0" role="button" aria-label="Go to slide ${customClass}"><span class="pag_item_7">` + getCustomText_7(index_7) + '<i class="pag_underline_7"></i></span></span>';
        }
    },
    on: {
        slideChange: function () {
            var activeIndex = swiper7.activeIndex;
            var paginationBullets = document.querySelectorAll('div.wrapper>main>div.slider_7>div.swiper-pagination>span.swiper-pagination-bullet');
            var title = document.querySelector(".slider_7_title");
            var pag = document.querySelectorAll(".pag_item_7");
            var pag_underline = document.querySelectorAll(".pag_underline_7");
            if (activeIndex === 0) {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #fff; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[0].style = "background-color: #fff; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            } else {
                paginationBullets.forEach(function (bullet, index) {
                    if (index === activeIndex) {
                        title.style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[0].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag[1].style = "color: #000; transition: color 1.3s cubic-bezier(0.4,0,0.2,1);";
                        pag_underline[1].style = "background-color: #000; transition: background-color 1.3s cubic-bezier(0.4,0,0.2,1);";
                    }
                });
            }
            paginationBullets.forEach(function (bullet, index) {
                bullet.addEventListener('click', function () {
                    swiper7.slideTo(index);
                });
            });
            var slide_box = document.querySelectorAll("div.wrapper>main>div.slider_7>div.swiper>div.swiper-wrapper>div.swiper-slide>div.slide_box");
            var previousIndex = swiper7.previousIndex;
            var activeIndex = swiper7.activeIndex;
            var targetBox = slide_box[activeIndex];
            if (previousIndex === (activeIndex + 1) && activeIndex === (previousIndex - 1)) {
                targetBox.classList.add("left_animate");
                setTimeout(function () {
                    targetBox.classList.remove('left_animate');
                }, 1000);
            }
            if (previousIndex === (activeIndex - 1) && activeIndex === (previousIndex + 1)) {
                targetBox.classList.add("right_animate");
                setTimeout(function () {
                    targetBox.classList.remove('right_animate');
                }, 1000);
            }
        },
    },
});

var swiper8 = new Swiper(".swiper8", {
    direction: "vertical",
    slidesPerView: 4,
    on: {
        init: function () {
            var slide1 = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slide1");
            var slide2 = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slide2");
            var slide3 = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slide3");
            var slide4 = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slide4");
            var slide5 = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slide5");
            var slide_act = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.swiper-slide-active");
            var content_2 = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.swiper-slide>div.content2");
            var num_and_title = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slide2>div.exp_content>div.exp_content>div.num_and_title");
            var learn_more =document.querySelectorAll("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.swiper-slide>div.exp_content>div.exp_content>div.learn_more");
            var slider_img = document.querySelector("div.wrapper>main>div.explore>div.exp_slider>div.swiper>div.swiper-wrapper>div.slider_img>img.slider_img");

            slide1.addEventListener("mouseenter", () => {
                slider_img.src = "./img/explore_1.png";
                if (slide2.classList[2] === "swiper-slide-active") {
                    slide2.classList.remove("swiper-slide-active");
                }
                if (slide3.classList[2] === "swiper-slide-active") {
                    slide3.classList.remove("swiper-slide-active");
                }
                if (slide4.classList[2] === "swiper-slide-active") {
                    slide4.classList.remove("swiper-slide-active");
                }
                if (slide5.classList[2] === "swiper-slide-active") {
                    slide5.classList.remove("swiper-slide-active");
                }
                slide_act.classList.remove("swiper-slide-active");
                num_and_title.removeAttribute("style");
                slide1.classList.add("swiper-slide-active");
                slide1.classList.remove("swiper-slide-next");
                slide1.nextElementSibling.classList.add("swiper-slide-next");
            });

            slide2.addEventListener("mouseenter", () => {
                slider_img.src = "./img/explore_2.png";
                if (slide1.classList[2] === "swiper-slide-active") {
                    slide1.classList.remove("swiper-slide-active");
                }
                if (slide3.classList[2] === "swiper-slide-active") {
                    slide3.classList.remove("swiper-slide-active");
                }
                if (slide4.classList[2] === "swiper-slide-active") {
                    slide4.classList.remove("swiper-slide-active");
                }
                if (slide5.classList[2] === "swiper-slide-active") {
                    slide5.classList.remove("swiper-slide-active");
                }
                slide_act.classList.remove("swiper-slide-active");
                learn_more[1].style = "position: relative;top: 10px;";
                content_2.style = "height: 99px";
                num_and_title.style = "position: relative; top: -10px;";
                slide2.classList.add("swiper-slide-active");
                slide2.classList.remove("swiper-slide-next");
                slide2.nextElementSibling.classList.add("swiper-slide-next");
            });

            slide3.addEventListener("mouseenter", () => {
                slider_img.src = "./img/explore_3.png";
                if (slide1.classList[2] === "swiper-slide-active") {
                    slide1.classList.remove("swiper-slide-active");
                }
                if (slide2.classList[2] === "swiper-slide-active") {
                    slide2.classList.remove("swiper-slide-active");
                }
                if (slide4.classList[2] === "swiper-slide-active") {
                    slide4.classList.remove("swiper-slide-active");
                }
                if (slide5.classList[2] === "swiper-slide-active") {
                    slide5.classList.remove("swiper-slide-active");
                }
                slide_act.classList.remove("swiper-slide-active");
                num_and_title.removeAttribute("style");
                slide3.classList.add("swiper-slide-active");
                slide3.classList.remove("swiper-slide-next");
                slide3.nextElementSibling.classList.add("swiper-slide-next");
            });

            slide4.addEventListener("mouseenter", () => {
                slider_img.src = "./img/explore_4.png";
                if (slide1.classList[2] === "swiper-slide-active") {
                    slide1.classList.remove("swiper-slide-active");
                }
                if (slide2.classList[2] === "swiper-slide-active") {
                    slide2.classList.remove("swiper-slide-active");
                }
                if (slide3.classList[2] === "swiper-slide-active") {
                    slide3.classList.remove("swiper-slide-active");
                }
                if (slide5.classList[2] === "swiper-slide-active") {
                    slide5.classList.remove("swiper-slide-active");
                }
                slide_act.classList.remove("swiper-slide-active");
                learn_more[3].style = "position: relative;top: 22px;";
                num_and_title.removeAttribute("style");
                slide4.classList.add("swiper-slide-active");
                slide4.classList.remove("swiper-slide-next");
                slide4.nextElementSibling.classList.add("swiper-slide-next");
            });

            slide5.addEventListener("mouseenter", () => {
                slider_img.src = "./img/explore_5.png";
                if (slide1.classList[2] === "swiper-slide-active") {
                    slide1.classList.remove("swiper-slide-active");
                }
                if (slide2.classList[2] === "swiper-slide-active") {
                    slide2.classList.remove("swiper-slide-active");
                }
                if (slide3.classList[2] === "swiper-slide-active") {
                    slide3.classList.remove("swiper-slide-active");
                }
                if (slide4.classList[2] === "swiper-slide-active") {
                    slide4.classList.remove("swiper-slide-active");
                }
                slide_act.classList.remove("swiper-slide-active");
                learn_more[4].style = "position: relative;top: 22px;";
                num_and_title.removeAttribute("style");
                slide5.classList.add("swiper-slide-active");
                slide5.classList.remove("swiper-slide-next");
                slide5.nextElementSibling.classList.add("swiper-slide-next");
            });
        }
    }
});

function getCustomText(index) {
    var customTexts = ['Galaxy S24 Ultra', 'Galaxy S24 Ultra', 'Super Sunday Deal', 'Bespoke Refrigerator', 'Odyssey Ark 2nd Gen', 'Bespoke Laundry'];
    return customTexts[index];
}

function getCustomText_2(index_2) {
    var customTexts = ['For You', 'Mobile & Computing', 'TV', 'Home Appliances', 'Samsung Live', 'For Business'];
    return customTexts[index_2];
}

function getCustomText_4(index_4) {
    var customTexts = ['Galaxy S24 Ultra', 'Galaxy S24 | S24+', 'Galaxy Experience', 'Galaxy Tab S9 Series', 'Galaxy Watch6 Series'];
    return customTexts[index_4];
}

function getCustomText_5(index_5) {
    var customTexts = ['OLED', 'Samsung Neo QLED 4K', 'Ultra Slim Soundbar'];
    return customTexts[index_5];
}

function getCustomText_6(index_6) {
    var customTexts = ['Refrigerators', 'Bespoke AI Laundry', 'Bespoke Kitchen'];
    return customTexts[index_6];
}

function getCustomText_7(index_7) {
    var customTexts = ['Certified Renewed', 'How to Recycle'];
    return customTexts[index_7];
}