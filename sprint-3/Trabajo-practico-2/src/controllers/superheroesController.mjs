import { obtenerTodosLosSuperheroes, agregarSuperheroe, editarSuperheroe, eliminarSuperheroePorId ,eliminarSuperheroePorNombre} from '../services/superheroesService.mjs'
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'
import { body, validationResult } from 'express-validator'


export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosSuperheroes()
    res.send(renderizarListaSuperheroes(superheroes))
}

export async function agregarSuperheroeController(req, res) {
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()})
    }
    const superhero = await agregarSuperheroe(req.body)
    res.send(renderizarSuperheroe(superhero))
}

export async function editarSuperHeroeController(req, res) {
    const id = req.params.id
    const superheroEdit = req.body
    const superheroes = await editarSuperheroe(id, superheroEdit)
    res.send(renderizarListaSuperheroes(superheroes))
}

export async function eliminarSuperheroePorIdController(req, res) {
    const id = req.params.id
    const superhero = await eliminarSuperheroePorId(id)
    res.send(renderizarSuperheroe(superhero))
}

export async function eliminarSuperheroePorNombreController(req,res){
    const {nombre}  = req.params;
    const superhero = await eliminarSuperheroePorNombre(nombre)
    res.send(renderizarSuperheroe(superhero))
}
// export async function buscarSuperheroesPorAtributoController(req, res) {
//     const { atributo, valor } = req.params;
//     const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

//     if (superheroes.length > 0) {
//         res.send(renderizarListaSuperheroes(superheroes))
//     } else {
//         res.status(404).send({ mensaje: "No se encontraron superheroes con ese atributo" })
//     }
// }

