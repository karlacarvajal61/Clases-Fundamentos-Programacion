const lunes = 'Lunes'
const martes = 'Martes'
const miercoles = 'Miercoles'
const jueves = 'Jueves'
const viernes = 'Viernes'
const sabado = 'Sabado'
const domingo = 'Domingo'

let hoy = 'Miercoles'
let pregunta1 = 'Hoy es lunes?'
let pregunta2 = 'Hoy es miercoles?'
let pregunta3 = 'Hoy es martes o miercoles?'
let pregunta4 = 'Hoy es miercoles y jueves?'

console.log (pregunta1, lunes == hoy)
console.log (pregunta2, miercoles == hoy)
console.log (pregunta3, hoy == miercoles || hoy==martes)
console.log (pregunta4, hoy==miercoles && hoy==jueves)

