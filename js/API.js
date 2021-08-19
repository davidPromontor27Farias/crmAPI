

const url = 'http://localhost:4000/clientes';
//conuna funcion async nos traeremos los datos del cliente
export const nuevoCliente = async cliente =>{

    try {
        //le hacemos un await al fetch(url);
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //al momento de llenar el formulario nos redireccionara al inicio
        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}

export const obtenerClientes = async () =>{

    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();
        //retornamos la respuesta ya que la ocuparemos en el archivo app.js
        return respuesta;
        
    } catch (error) {
        console.log(error);
    }

}

//se encargara de eliminar al cliente en base a su id, lo eliminara de la interfaz y del db.json
export const eliminarCliente = async idCliente =>{
    
    try {
        
        await fetch(`${url}/${idCliente}`, {
            //metodo para eliminar
            method: 'DELETE'
        })
    } catch (error) {
        console.log(error)
    }
}

//consultamos los datos de nuevo
export const extraerInformacion = async id =>{
    try {
        //le pasamos la url y el id
        const respuesta = await fetch(`${url}/${id}`);
        const resultado = await respuesta.json();
        return (resultado);
    } catch (error) {
        console.log(error);
    }
}

export const actualizarCustomer = async cliente => {
    try {
        //le hacemos fetch a la url para cambiar en el json
        await fetch(`${url}/${cliente.id}`, {
            //metodo put para editar
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }

        });
        //nos redireccionara al inicio 
        window.location.href = 'index.html';
    } catch (error) {
        console.log(error);
    }
}

