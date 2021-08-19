
import {imprimirAlerta, validar} from './funciones.js';
import {nuevoCliente} from './API.js';
(function (){
    const formulario = document.querySelector('.formulario');

    
    formulario.addEventListener('submit', validarFormulario);
 

    function validarFormulario(e){
        e.preventDefault();
        
        //Selectores para los campos de la validacion
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const clienteInformacion = {
            nombre,
            email,
            telefono,
            empresa
        }


        
        if(validar(clienteInformacion)){
            imprimirAlerta('Los campos no pueden ir vacios', 'error');

            return;
        }
        //le damos la informacion del cliente ya que se enviara por POST
        nuevoCliente(clienteInformacion);
 
    }


})();