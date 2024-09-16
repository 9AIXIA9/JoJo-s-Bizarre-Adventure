window.onload = function () {
    const images = document.getElementsByClassName("carousel_image");
    const circles = document.getElementsByClassName("carousel_circle");
    const leftButton = document.querySelector(".carousel_button_left");
    const rightButton = document.querySelector(".carousel_button_right");
    const carouselBox = document.querySelector(".carousel");
    let index = 0;
    let timer = null;
    const normalInterval = 1500;
    const hoverInterval = 3000;

    // 清除所有图片和圆点的激活状态
    const clearClass = function () {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("active");
            circles[i].classList.remove("circle_white");
            circles[i].setAttribute("num", i);
        }
    }

    // 根据当前index设置对应的图片和圆点
    const move = function () {
        clearClass();
        images[index].classList.add("active");
        circles[index].classList.add("circle_white");
    }

    // 向右滚动的函数
    const moveRight = function () {
        index = (index + 1) % images.length;
        move();
    }

    // 向左滚动的函数
    const moveLeft = function () {
        index = (index - 1 + images.length) % images.length;
        move();
    }

    // 绑定按钮点击事件
    rightButton.onclick = function () {
        moveRight();
    };

    leftButton.onclick = function () {
        moveLeft();
    };

    // 自动播放功能
    const startAutoPlay = function (interval) {
        timer = setInterval(moveRight, interval);
    }

    // 停止自动播放
    const stopAutoPlay = function () {
        clearInterval(timer);
    }

    // 初始化自动播放
    startAutoPlay(normalInterval);

    // 为圆点绑定点击事件
    for (let i = 0; i < circles.length; i++) {
        circles[i].addEventListener("click", function () {
            index = parseInt(this.getAttribute("num"));
            move();
        });
    }

    // 当鼠标移入轮播区域时，延长播放间隔
    carouselBox.onmouseover = function () {
        stopAutoPlay();
        startAutoPlay(hoverInterval);
    }

    // 当鼠标移出轮播区域时，恢复原来的播放间隔
    carouselBox.onmouseleave = function () {
        stopAutoPlay();
        startAutoPlay(normalInterval);
    }

    // 初始化轮播图的显示
    move();
}
