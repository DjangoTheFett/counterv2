let count = 0


const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const counter = document.getElementById("counter")


increase.addEventListener("click", function() {
    count ++
    console.log(count)
    counter.innerHTML = count

})
decrease.addEventListener("click", function() {
    count --
    console.log(count)
    counter.innerHTML = count

})
reset.addEventListener("click", function() {
    count = 0
    console.log(count)
    counter.innerHTML = count

})