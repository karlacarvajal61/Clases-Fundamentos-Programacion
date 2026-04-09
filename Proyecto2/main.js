const cantidadDeClientes = 25;

function calcularTiempoCajero(totalClientes) {
    let segundosTotales = 0;

    for (let i = 1; i <= totalClientes; i++) {
        let tiempoCliente = 0;

        if (i % 2 === 0) {
            tiempoCliente += (i * 60) + 45;
            
            if (i % 10 === 0) {
                tiempoCliente += (18 * 60) + 11;
            }
        } else {
            tiempoCliente += 20;

            if (i % 5 === 0) {
                tiempoCliente += (37 * 60);
            }
        }

        segundosTotales += tiempoCliente;
    }

    return formatearTextoFinal(segundosTotales);
}

function formatearTextoFinal(segundosTotales) {
    const horas = Math.floor(segundosTotales / 3600);
    const minutos = Math.floor((segundosTotales % 3600) / 60);
    const segundos = segundosTotales % 60;

    let resultado = "A el cajero le va a tomar ";
    let partes = [];

    if (horas > 0) partes.push(`${horas} ${horas === 1 ? 'hora' : 'horas'}`);
    if (minutos > 0) partes.push(`${minutos} ${minutos === 1 ? 'minuto' : 'minutos'}`);
    if (segundos > 0) partes.push(`${segundos} ${segundos === 1 ? 'segundo' : 'segundos'}`);

    if (partes.length > 1) {
        const ultimo = partes.pop();
        return resultado + partes.join(", ") + " y " + ultimo;
    } else {
        return resultado + (partes[0] || "0 segundos");
    }
}

console.log(calcularTiempoCajero(cantidadDeClientes));