function clean() {
    res.innerHTML = ''
}
function escrever(value) {
    if (value === "+" || value === "*" || value === "-" || value === "/" || value === '^') {
        res.innerHTML += ' ' + value + ' '
    } else if (value === 'sen') {
        res.innerHTML += value + ' '
    } else if (value === 'cos') {
        res.innerHTML += value + ' '
    } else if (value === 'sqrt') {
        res.innerHTML += value + ' '
    } else {
        res.innerHTML += value
    }
}

function calcular() {
    var exparray = res.innerHTML.split(' ')
    var num1 = exparray.shift()
    var op = exparray.shift()
    var num2 = exparray.shift()
    if (op === '+') {
        var soma = Number(num1) + Number(num2)
        res.innerHTML = soma
    } else if (op === '^') {
        var pot = Math.pow(num1, num2)
        res.innerHTML = pot
    } else if (op === '-') {
        var sub = Number(num1) - Number(num2)
        res.innerHTML = sub
    }
    else if (Number(num2) === 0) {
        window.alert("Impossível dividir por 0")
        res.innerHTML = ''
    } else if (op === '/') {
        var div = Number(num1) / Number(num2)
        res.innerHTML = div
    }
    else if (op === '*') {
        var multi = (Number(num1) * Number(num2))
        res.innerHTML = multi
    } else if (num1 === 'sen') {
        var seno = op
        res.innerHTML = Math.sin(Number(seno)).toFixed(4)
    } else if (num1 === 'cos') {
        var coss = op
        res.innerHTML = Math.cos(Number(coss)).toFixed(4)

    } else if (num1 === 'sqrt') {
        var radican = op
        res.innerHTML = Math.sqrt(radican)

    } else {
        res.innerHTML = "SyntaxError"
    }
}

