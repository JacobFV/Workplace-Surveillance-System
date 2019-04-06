let leftClickCount = 0
let rightClickCount = 0

function incL() {
    leftClickCount ++
    document.getElementById('leftClickCountPar')
    .innerHTML = leftClickCount.toString()
}

function incR() {
    rightClickCount ++
    document.getElementById('rightClickCountPar')
    .innerHTML = rightClickCount.toString()
}

bmx = document.getElementById('bmx')
for(let x=0;x<5;x++) {
    for(let y=0;y<5;y++) {
        const coordinates = x.toString() + ',' + y.toString()
        bmx.innerHTML
            +='<button id=\'bmxb\' onClick=\'bmxClick(' + coordinates + ')\'>'
            + coordinates + '</button>'
    }
    bmx.innerHTML += '<br>'
}

function bmxClick(x, y) {
    document.getElementById('bmxid').innerHTML = 
        '(' + x.toString() + ', ' + y.toString() + ')'
}

const frametimespan = document.getElementById('frametime')
let frame = 0
setInterval(() => {
    frame++
    frametimespan.innerHTML =
        (frame/20).toPrecision(3)
}, 50)