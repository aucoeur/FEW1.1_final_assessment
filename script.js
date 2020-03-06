const titleText = document.getElementById('titleText')
const titleColor = document.getElementById('titleColor')
const msg = document.getElementById('msg')
const msgColor = document.getElementById('msgColor')
const titleDisplay = document.getElementById('titleDisplay')
const msgDisplay = document.getElementById('msgDisplay')

const fontType = document.getElementById('fontType')
const fontSize = document.getElementById('fontSize')
const submit = document.getElementById('submit')

titleText.addEventListener('keyup', function () {
    titleDisplay.innerHTML = titleText.value
})

msg.addEventListener('keyup', function() {
    msgDisplay.innerHTML = msg.value
})

titleColor.addEventListener('input', function() {
    titleDisplay.style.color = titleColor.value
})

msgColor.addEventListener('input', function() {
    msgDisplay.style.color = msgColor.value
})

fontType.addEventListener('change', function() {
    titleDisplay.style.fontFamily = fontType.value
    msgDisplay.style.fontFamily = fontType.value
})

fontSize.addEventListener('change', function() {
    titleDisplay.style.fontSize = fontSize.value + "px"
    msgDisplay.style.fontSize = fontSize.value + "px"
})

submit.addEventListener('click', function() {
    alert('Let\'s pretend this did something')
})