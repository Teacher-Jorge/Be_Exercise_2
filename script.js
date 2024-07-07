let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")
let input5 = document.getElementById("input5")
let input6 = document.getElementById("input6")
let input7 = document.getElementById("input7")

let correctSound = document.getElementById("correctSound")

//Line 01

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'are' || input1.value === 'Are') {
        input1.value = 'are'
        correctSound.play()
        input1.style.color = 'limegreen'
        check1.style.visibility = 'visible'
        input1.disabled = true
        document.getElementById('input2').focus()
    }
})

input1.addEventListener('keyup', (e) => {
    if (input1.value === 'am' || input1.value === "is" || input1.value === 'Am' || input1.value === 'Is') {
        input1.style.color = 'red'
    }
})

//Line 02

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'am' || input2.value === 'Am') {
        input2.value = 'am'
        correctSound.play()
        input2.style.color = 'limegreen'
        input2.disabled = true
        document.getElementById('input3').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if (input2.value === 'are' || input2.value === "is" || input2.value === 'Are' || input2.value === 'Is') {
        input2.style.color = 'red'
    }
})

//Line 03

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'is' || input3.value === 'Is') {
        input3.value = 'is'
        correctSound.play()
        input3.style.color = 'limegreen'
        check2.style.visibility = 'visible'
        input3.disabled = true
        document.getElementById('input4').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if (input3.value === 'are' || input3.value === "am" || input3.value === 'Am' || input3.value === 'Are') {
        input3.style.color = 'red'
    }
})

//Line 04

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'are' || input4.value === 'Are') {
        input4.value = 'Are'
        correctSound.play()
        input4.style.color = 'limegreen'
        check3.style.visibility = 'visible'
        input4.disabled = true
        document.getElementById('input5').focus()
    }
})

input4.addEventListener('keyup', (e) => {
    if (input4.value === 'am' || input4.value === "is" || input4.value === 'Am' || input4.value === 'Is') {
        input4.style.color = 'red'
    }
})

//Line 05

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'am' || input5.value === 'Am') {
        input5.value = 'am'
        correctSound.play()
        input5.style.color = 'limegreen'
        check4.style.visibility = 'visible'
        input5.disabled = true
        document.getElementById('input6').focus()
    }
})

input5.addEventListener('keyup', (e) => {
    if (input5.value === 'are' || input5.value === "is" || input5.value === 'Are' || input5.value === 'Is') {
        input5.style.color = 'red'
    }
})

//Line 06

input6.addEventListener('keyup', (e) => {
    if (input6.value === 'are' || input6.value === 'Are') {
        input6.value = 'Are'
        correctSound.play()
        input6.style.color = 'limegreen'
        check5.style.visibility = 'visible'
        input6.disabled = true
        document.getElementById('input7').focus()
    }
})

input6.addEventListener('keyup', (e) => {
    if (input6.value === 'am' || input6.value === "is" || input6.value === 'Am' || input6.value === 'Is') {
        input6.style.color = 'red'
    }
})

//Line 07

input7.addEventListener('keyup', (e) => {
    if (input7.value === 'am' || input7.value === 'Am') {
        input7.value = 'am'
        correctSound.play()
        input7.style.color = 'limegreen'
        check6.style.visibility = 'visible'
        input7.disabled = true
    }
})

input7.addEventListener('keyup', (e) => {
    if (input7.value === 'are' || input7.value === "is" || input7.value === 'Are' || input7.value === 'Is') {
        input7.style.color = 'red'
    }
})


