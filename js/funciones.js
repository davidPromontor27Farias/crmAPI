

export function imprimirAlerta(mensaje, tipo){
    const formulario = document.querySelector('.formulario');
    const alertaError = document.querySelector('.alerta-error');

    if(!alertaError){
        const alerta = document.createElement('P');
        alerta.classList.add('alerta');
        alerta.textContent = mensaje;

        if(tipo === 'error'){
            alerta.classList.add('alerta-error');
        }
        else{
            alerta.classList.add('alerta.correcta');
        }

        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }        
}

export function validar(obj){
    return !Object.values(obj).every(input => input != '');
}





