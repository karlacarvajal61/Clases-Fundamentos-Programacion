//if (5 == 5 && 4 > 10 || 3 != 7){
    //console.log('La condición es cierta')
//} else {
    //console.log('La condición es falsa')

const userName = 'Maggie10' // cualquier string
const userPassword = '1987' //cualquier string
const savedPassword = '1987' //No cambia
const userAnswer = 'Scrappy' //cualquier string
const savedAnswer = 'Menta' //No cambia

if(userName != 'Maggie10'){
    console.log ('User name no existe')
} else if  (userName == 'Maggie10' && userPassword == savedPassword) {
    console.log ('Inicio de sesión')
} else if ((userPassword != '1987' && savedPassword == '1987') || (userAnswer == 'Scrappy' && savedAnswer == "Menta")){
    console.log ('Inicio de sesión')
} else {
    console.log ('No se puede iniciar sesión')}


