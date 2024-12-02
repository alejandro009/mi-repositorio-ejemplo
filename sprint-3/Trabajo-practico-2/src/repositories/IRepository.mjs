class IRepository {

    obtenerTodos() {
        throw new Error("Metodo 'obtenerPorId()' no implementado")
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
    eliminarPorNombre(nombre){
        throw new Error("Metodo 'eliminarPorNombre(nombre)' no implementado")
    }

}

export default IRepository