window.onload = function () {
    var images = document.getElementsByClassName("carousel_image");
    var circles = document.getElementsByClassName("carousel_circle");
    var leftButton = document.querySelector(".carousel_button_left");
    var rightButton = document.querySelector(".carousel_button_right");
    var carousel_box = document.querySelector(".carousel");
    var index = 0;
    var timer = null;

    var clearclass = function () {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
            circles[i].classList.remove("circle_white");
            circles[i].setAttribute("num", i);
        }
    }

    function move() {
        clearclass();
        images[index].classList.add("active");
        circles[index].classList.add("circle_white");
    }

    rightButton.onclick = function () {
        index = (index + 1) % images.length;
        move();
    };

    leftButton.onclick = function () {
        index = (index - 1 + images.length) % images.length;
        move();
    };

    timer = setInterval(function () {
        rightButton.onclick();
    }, 1500);

    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function () {
            index = this.getAttribute("num");
            move();
        })
    }

    carousel_box.onmouseover = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            rightButton.onclick();
        }, 3000);
    }

    carousel_box.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            rightButton.onclick();
        }, 1500);
    }

    move();
}
