
window.onload = function () {
    let inner_photo = document.getElementsByClassName("inner_act")
    let audio = document.getElementsByClassName("audio");
    console.log(inner_photo, audio)
    for (let i = 0; i < inner_photo.length; i++) {
        inner_photo[i].addEventListener("change", (event) => {
            if (event.target.checked) {
                audio[i].load()
                audio[i].play()
            } else {
                audio[i].pause()
            }
        })

    }
}