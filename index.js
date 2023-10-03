let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(saveEl)
function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let display = count + " - "
    saveEl.textContent += display
    setzero()
}

function setzero(){
    countEl.textContent = 0 
    count=0
}


// instead of innerText use textContent because the innertext only recognises human readable texts and ignore hidden texts ( to render the info ex: saveEl.innerText)