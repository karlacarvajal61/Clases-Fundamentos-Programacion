let iteraciones = 100
while (iteraciones > 0){
    if (iteraciones % 3 === 0 && iteraciones % 5 === 0){
            console.log('El número', iteraciones, 'es múltiplo de de 3 y de 5')
        } else if (iteraciones % 5 === 0) {
            console.log('El número', iteraciones, 'es multiplo de 5');
        } else if (iteraciones % 3 === 0){
            console.log ('El número', iteraciones, 'es múltiplo de 3');
        } else {
            console.log ('El número', iteraciones, 'no es múltiplo de 3 ni de 5')
        }
        iteraciones = iteraciones - 1;
    }    
    

/*residuoDe5 = iteraciones % 5 === 0;
  residuoDe3 = iteraciones % 3 === 0;*/

