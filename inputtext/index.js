const input = document.getElementById("textInput")
const submitBtn = document.getElementById("submitBtn")
const box = document.getElementById("displayBox")
const speedBox = document.getElementById("speedBox")
const upBtn = document.getElementById("upBtn")
const downBtn = document.getElementById("downBtn")
let speedLevel = 1
let text = ""
let index = 0
let timer = null
let running = false
const BASE_DELAY = 500
function delay() {
    return Math.max(10, BASE_DELAY / speedLevel)
}
function updateSpeed() {
    speedBox.value = speedLevel
}
function typeNext() {
    if (!running) return
    if (index >= text.length) {
        box.textContent = ""
        index = 0
    }
    box.textContent += text[index++]
    timer = setTimeout(typeNext, delay())
}
function startTyping() {
    if (timer) clearTimeout(timer)
    box.textContent = ""
    text = input.value
    index = 0
    running = true
    timer = setTimeout(typeNext, delay())
}
function handleSpeedUpdate() {
    if (submitBtn.disabled) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(typeNext, delay())
    }
}
submitBtn.onclick = () => {
    submitBtn.disabled = true
    startTyping()
}
upBtn.onclick = () => {
    speedLevel++
    updateSpeed()
    handleSpeedUpdate()
}
downBtn.onclick = () => {
    if (speedLevel > 1) speedLevel--
    updateSpeed()
    handleSpeedUpdate()
}
speedBox.oninput = () => {
    const val = parseInt(speedBox.value)
    if (!isNaN(val) && val > 0) {
        speedLevel = val
        handleSpeedUpdate()
    }
}
updateSpeed()
