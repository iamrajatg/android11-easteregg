const midCircle = document.querySelector(".mid-circle")
const container = document.querySelector(".container")
const innerCircle = document.querySelector(".inner-circle")

var st = window.getComputedStyle(midCircle, null)
var tr =
    st.getPropertyValue("-webkit-transform") ||
    st.getPropertyValue("-moz-transform") ||
    st.getPropertyValue("-ms-transform") ||
    st.getPropertyValue("-o-transform") ||
    st.getPropertyValue("transform") ||
    "FAIL"

console.log("Matrix: " + tr)

var values = tr.split("(")[1].split(")")[0].split(",")
var a = values[0]
var b = values[1]

var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))

console.log("Rotate: " + angle + "deg")

var rect = container.getBoundingClientRect()

var offset = {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
}

//let mouseDown = false

const dotClassArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
]
const dotContainers = document.querySelectorAll(".dot-container")
let prevNumBigCircles = 1

container.addEventListener("mousemove", (e) => {
    // if (mouseDown === true) {
    var radians = Math.atan2(e.pageX - (130 + offset.left), e.pageY - (130 + offset.top))
    var degree = radians * (180 / Math.PI) * -1
    midCircle.style.transform = `rotate(${degree}deg)`
    let numBigCircles = Math.round(degree / 30)
    if (numBigCircles == -1) {
        numBigCircles = 1
    } else if (numBigCircles < 0) {
        numBigCircles = numBigCircles + 14
    } else {
        numBigCircles += 2
    }
    if (numBigCircles > 11 && prevNumBigCircles !== 1) {
        numBigCircles = 11
        document.querySelector(".text").classList.add("big")
    } else {
        document.querySelector(".text").classList.remove("big")
    }
    if (numBigCircles >= 11 && prevNumBigCircles == 1) {
        return
    }
    console.log(numBigCircles)
    for (let i = 0; i < numBigCircles - 1; i++) {
        dotContainers[i].classList.add("big")
    }
    if (numBigCircles < 11)
        for (let j = numBigCircles; j < 10; j++) {
            dotContainers[j].classList.remove("big")
        }

    prevNumBigCircles = numBigCircles

    //}
})
