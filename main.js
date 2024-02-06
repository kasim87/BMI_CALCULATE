let heightinput = Number(document.getElementById('height').innerHTML)
let weightinput = Number(document.getElementById('weight').innerHTML)
let ageInput = Number(document.getElementById('ageNum').innerHTML)

const calculatBattun = document.getElementById ('calculatbutton')

const addweightbut = document.getElementById('addweightbut')
let subweightbut = document.getElementById('subweightbut')
let addagebut = document.getElementById('addagebut')
let subagebut = document.getElementById('subagebut')

function calculat(weight, height) {
    let = height/100
    bmi = weight/(height*height)
    return bmi
}

function getresult(bmi) {
    if (25 > bmi) {
        return "перевес"
    }
    else if (bmi > 25) {
        return 'нормолно'
    }
    else {
        return 'недовес'
    }
}

function getInterpret(bmi) {
    if (25 > bmi) {
        return "у вас перевес"
    }
    else if (bmi > 25) {
        return ' у вас нормолно'
    }
    else {
        return 'у вас недовес'
    }
}

calculatBattun.addEventListener('click', function() {
        let heightinput = Number(document.getElementById('height').innerHTML)
        let bmi = calculat(weight, height);
        let resultText = getresult(bmi);
        let intText = getInterpret(bmi);

        let url = `result.html?bmi-${bmi}$resultText-${resultText}$intText-${intText}`;
        window.location.href = url;
    }
)


function addweight() {
    let weightinput = Number(document.getElementById('weight').innerHTML)
    return weightinput+=1
}

function subweight() {
    let weightinput = Number(document.getElementById('weight').innerHTML)
    return weightinput-=1
}

function addAge() {
    let ageInput = Number(document.getElementById('ageNum').innerHTML)
    return ageInput+=1
}

function subAge() {
    let ageInput = Number(document.getElementById('ageNum').innerHTML)
    return ageInput-=1
}

addweightbut.addEventListener('click', function(){
    let result = addweight()
    // alert(result)
    document.getElementById('weight').innerHTML = result
})

subweightbut.addEventListener('click', function(){
    let result = subweight()
    // alert(result)
    document.getElementById('weight').innerHTML = result
})

addagebut.addEventListener('click', function(){
    let result = addAge()
    // alert(result)
    document.getElementById('ageNum').innerHTML = result
})

subagebut.addEventListener('click', function(){
    let result = subAge()
    // alert(result)
    document.getElementById('ageNum').innerHTML = result
})

const line = document.getElementById('line')
const height = document.getElementById('height')
const circle = document.getElementById('circle')

let circleIsDragging = false

circle.addEventListener('mousedown', ()=> {
    circleIsDragging = true
})

document.addEventListener('mousemove', (event)=> {
    if (circleIsDragging) {
        const lineRect = line.getBoundingClientRect()
        const circleRect = circle.getBoundingClientRect()
        
        const circleX = event.clientX - lineRect.left
        circleWidth = circleRect.width
        lineWidth = lineRect.width
        const newCircleX = Math.min(Math.max(circleX, 0), lineWidth - circleWidth)
        const newHeight = Math.round((newCircleX / (lineWidth - circleWidth)) * 250)
        height.textContent = newHeight

        circle.style.left = newCircleX + 'px'
    }
})

document.addEventListener('mouseup', ()=> {
    circleIsDragging = false
})