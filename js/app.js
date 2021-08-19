import {obtenerClientes, eliminarCliente} from './API.js';

(function(){

    const resultadoBody = document.querySelector('.body-informacion');
    
    //Los resultados se veran cuando el documento cargue
    document.addEventListener('DOMContentLoaded', imprimirClientes);
    //le aplicamos el vento de click al cuerpo de la tabla
    resultadoBody.addEventListener('click', confirmarEliminar);

    async function imprimirClientes(){

        //instanciamos a los clientes y con el await esperamos a que esten listo
        const clientes = await obtenerClientes();
        
        clientes.forEach(cliente => {
            const { nombre, telefono, email, empresa, id} = cliente;
            const row = document.createElement('tr');
            row.classList.add('fila-datos');
            row.innerHTML += `
                <td class="datos">
                    <p class="nombre">${nombre}</p>
                    <p class="email">${email}</p>
                </td>
                <td class="datos">
                    <p>${telefono}</p>
                </td>
                <td class="datos">
                    <p>${empresa}</p>
                </td>

                <td class="botones">
                    <a href="editarCliente.html?id=${id}" class="editar">Editar</a>
                    <a href="#" data-cliente="${id}" class="eliminar">Eliminar</a>
                </td>
            `

            resultadoBody.appendChild(row);
        });
    }

    function confirmarEliminar(e){
        //utilizamos delgation
        if(e.target.classList.contains('eliminar')){
            //pasamos el id del cual se eliminara
            const clienteId = parseInt(e.target.dataset.cliente);
            
            const confirmar = confirm('¿Estas seguro de eliminar al elemento seleccionado?');
            
            //si se confirmo llamara esta funcion
            if(confirmar){
                eliminarCliente(clienteId);
            }
        }
    }

})()