import express from 'express'
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayores30Controller
} from '../controllers/superheroesController.mjs'

const router = express.Router()

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.get('/heroes/:id', obtenerSuperheroePorIdController)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController)
router.get('/heroes/mayores-30', obtenerSuperheroesMayores30Controller)

export default router