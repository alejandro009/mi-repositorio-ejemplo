import { obtenerTodosLosSuperheroes, agregarSuperheroe, editarSuperheroe, eliminarSuperheroePorId, obtenerSuperheroePorId } from '../services/superheroesService.mjs'
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs'
import { validationResult } from 'express-validator'
import SuperHero from '../models/SuperHero.mjs'

export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosSuperheroes()
    res.render('dashboard', {
        title: 'SuperHeroes', superheroes
    })
}

export async function obtenerSuperheroePorIdController(req, res) {
    const id = req.params.id
    const hero = await obtenerSuperheroePorId(id)
    res.render('addSuperhero', {title: 'Nuevo SuperHeroe', hero })
}

export async function agregarSuperheroeController(req, res) {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() })
    }
    await agregarSuperheroe(req.body)
    const superheroes = await obtenerTodosLosSuperheroes()
    res.render('dashboard', { title: 'SuperHeroes', superheroes })

}


export async function formAgregarSuperheroeController(req, res) {
    const hero = new SuperHero()
    res.render('addSuperhero', {title: 'Nuevo SuperHeroe', hero })
}


export async function editarSuperHeroeController(req, res) {
    const id = req.params.id
    const superheroEdit = req.body
    const superheroes = await editarSuperheroe(id, superheroEdit)
    res.render('dashboard', { title: 'SuperHeroes', superheroes })
}

export async function eliminarSuperheroePorIdController(req, res) {
    const id = req.params.id
    await eliminarSuperheroePorId(id)
    const superheroes = await obtenerTodosLosSuperheroes()
    res.render('dashboard', { title: 'SuperHeroes', superheroes })
}


