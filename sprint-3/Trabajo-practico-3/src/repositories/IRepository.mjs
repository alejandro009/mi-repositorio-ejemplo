class IRepository {

    obtenerTodos() {
        throw new Error("Metodo 'obtenerTodos()' no implementado")
    }
    obtenerPorId(id){
        throw new Error("Metodo 'obtenerPorId(id)' no implementado")
    }
    agregar() {
        throw new Error("Metodo 'agregar()' no implementado")
    }

    editar(id, data) {
        throw new Error("Metodo 'editar(id,data)' no implementado")
    }
    eliminarPorId(id) {
        throw new Error("Metodo 'eliminarPorId(id)' no implementado")
    }
   

}

export default IRepository