import {extraerInformacion, actualizarCustomer} from './API.js';
import {validar, imprimirAlerta} from './funciones.js';

(function(){
    //selectores a rellenar
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', async ()=>{

        //extraemos el id del cliente
        const extraccionId = new URLSearchParams(window.location.search);
        //lo pasamos a un numero entero
        const idCliente = parseInt(extraccionId.get('id'));

        //nos traemos los datos con la funcion y le psamos el id
        const resultadoExtraccion = await extraerInformacion(idCliente)
        imprimirDatos(resultadoExtraccion);

        const formulario = document.querySelector('.formulario');
        formulario.addEventListener('submit', validarEdicion);


    })

    function imprimirDatos(resultado){
        const {nombre, email, telefono, empresa, id} = resultado;
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;
    }

    function validarEdicion(e){
        e.preventDefault();
        
        const clientes = {
            //al momento de ediat que los campos ocupen la edicion
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: parseInt(idInput.value)
        }   
        //validamos nuevamentes
        if(validar(clientes)){
            imprimirAlerta('Los campos no pueden ir vacios');
            return;
        }
        //mandamos llamar la funcion de la API que se encargar de editar
        actualizarCustomer(clientes);

    }

})();