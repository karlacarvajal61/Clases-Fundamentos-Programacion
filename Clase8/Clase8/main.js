/*let cantidadEstudiantes = 20;

while (cantidadEstudiantes > 0){
    console.log('Enviar correo a estudiante', cantidadEstudiantes);
    cantidadEstudiantes = cantidadEstudiantes - 1;
}*/  

cantidadEstudiantes = 20;

while (cantidadEstudiantes > 0){
    if (cantidadEstudiantes % 2 === 0){
        console.log('Sorpresa para estudiante', cantidadEstudiantes)
    } else {
        console.log('Enviar correo a estudiante', cantidadEstudiantes);
    }
    cantidadEstudiantes = cantidadEstudiantes - 1;
}