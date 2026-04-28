const list = ['Manuel', 54, 'Lisa', 93, 'Daniel', 97, 'Maribel', 61]

let sumaCalificaciones = 0;
let aprobados = [];
let noAprobados = [];
let calificacionesTransformadas = [];

for (let i = 0; i < list.length; i +=2) {
    const nombre = list [i];
    const nota = list [i + 1];

    sumaCalificaciones += nota;

    if (nota >=70){
        aprobados.push(nombre);
    } else {
        noAprobados.push(nombre);
    }

    let letra= "";
    if (nota >= 95){
        letra = "A";
    } else if (nota >= 90){
        letra = "B";
    } else if (nota >= 80){
        letra = "C";
    } else if (nota >= 70){
        letra = "D";
    } else {
        letra = "F"
    }

calificacionesTransformadas.push (nombre, letra);

console.log (`La calificacion de ${nombre} es ${letra}`)
}

const promedio = (sumaCalificaciones / (list.length/2)).toFixed(2);

console.log (`El promedio de calificaciones es: ${promedio}`);
console.log (`Los estudiantes que aprobaron son: ${aprobados.join(", ")}`);
console.log (`Los estudiantes que no aprobaron son: ${noAprobados.join(", ")}`);
console.log (`La lista transformada es:`, calificacionesTransformadas);