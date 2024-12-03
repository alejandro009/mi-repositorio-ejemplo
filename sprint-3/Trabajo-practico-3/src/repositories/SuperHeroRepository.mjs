import SuperHero from '../models/SuperHero.mjs'
import IRepository from './IRepository.mjs'

class SuperHeroRepository extends IRepository {


    async obtenerTodos() {
        return await SuperHero.find({})
    }

    async agregar(data) {

        return await SuperHero.create({
            nombreSuperHeroe: data.nombreSuperHeroe,
            nombreReal: data.nombreReal,
            edad: data.edad,
            planetaOrigen: data.planetaOrigen,
            poderes: data.poderes,
            aliados: data.aliados,
            enemigos: data.enemigos,
            debilidad: data.debilidad
        })
    }

    async editar(id, data) {
        await SuperHero.updateOne({ _id: id }, { $set: data })
        return await SuperHero.find({})
    }

    async eliminarPorId(id) {
        return await SuperHero.findOneAndDelete({ _id: id })
    }

    async eliminarPorNombre(nombre){
        return await SuperHero.findOneAndDelete({ nombreSuperHeroe: nombre })
    }
}

export default new SuperHeroRepository()