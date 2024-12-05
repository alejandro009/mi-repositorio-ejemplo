import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";



export async function obtenerTodosLosSuperheroes(){
    return await SuperHeroRepository.obtenerTodos()
}

export async function obtenerSuperheroePorId(id){
    return await SuperHeroRepository.obtenerPorId(id)
}

export async function agregarSuperheroe(data){
        return await SuperHeroRepository.agregar(data)
}

export async function editarSuperheroe(id,data){
    return await SuperHeroRepository.editar(id,data)
}

export async function eliminarSuperheroePorId(id){
    return await SuperHeroRepository.eliminarPorId(id)
}




