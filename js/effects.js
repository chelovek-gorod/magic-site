'use strict'

const canvas = document.createElement('canvas')
const context = canvas.getContext('2d')

canvas.style = `
    display: block;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`

document.body.append(canvas)


document.body.onresize = resizeCanvas
function resizeCanvas() {
    canvas.width = innerWidth
    canvas.height = innerHeight
    console.log(innerWidth, innerHeight)
}
resizeCanvas()

function getRandomColor() {
    const red = Math.floor( Math.random() * 255 )
    const green = Math.floor( Math.random() * 255 )
    const blue = Math.floor( Math.random() * 255 )
    return `${red}, ${green}, ${blue}`
}

class Circle {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.radius = 0
        this.alpha = +(Math.random() + 1).toFixed(2)
        this.alphaStep = 0.01
        this.color = getRandomColor()
        circles.push(this)
    }

    update() {
        this.radius++
        this.alpha -= this.alphaStep
        context.beginPath()
        context.lineWidth = 2
        context.strokeStyle = `rgba(${this.color}, ${this.alpha})`
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.stroke()
    }
}

let circles = []

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    circles.forEach( circle => circle.update() )
    circles = circles.filter( circle => circle.alpha > 0 )

    requestAnimationFrame(update)
}
requestAnimationFrame(update)

const passSteps = 3
let step = passSteps

onmousemove = createCircle
function createCircle(event) {
    if (step > 0) return step--

    step = passSteps
    new Circle(event.clientX, event.clientY)
}