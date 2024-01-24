const fullBtn = document.querySelector('#full')
const dateBtn = document.querySelector('#date')
const timeBtn = document.querySelector('#time')
const output = document.querySelector('#output')
let mode = 'full'


function bindMode(name) {
    return function() {
        mode = name;
        update()
    }
}

fullBtn.addEventListener('click', bindMode('full'))
timeBtn.addEventListener('click', bindMode('time'))
dateBtn.addEventListener('click', bindMode('date'))

update()
setInterval(update, 1000)

function update() {
    output.textContent = format(mode)
}



function format(formatMode) {
    const now = new Date();

    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}