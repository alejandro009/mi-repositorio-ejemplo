import express from 'express'
import {

    obtenerTodosLosSuperheroesController,
    agregarSuperheroeController,
    editarSuperHeroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs'

const router = express.Router()

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.post('/heroes',agregarSuperheroeController)
router.put('/heroes/:id',editarSuperHeroeController)
router.delete('/heroes/:id',eliminarSuperheroePorIdController)
router.delete('/heroes/eliminar/:nombre',eliminarSuperheroePorNombreController)
export default router