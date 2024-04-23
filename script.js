let box = document.querySelector(".box")
let button = document.querySelector("button")
function randomHexcode() {
    let hexCod1 = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    let hexCod2 = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return [hexCod1,hexCod2]
}

button.addEventListener("click", () => {
    let [color1, color2] = randomHexcode();

    box.style.backgroundImage = `linear-gradient(45deg,${color1},${color2})`
    
})


