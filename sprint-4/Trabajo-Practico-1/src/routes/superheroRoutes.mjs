import express from 'express'
import { body, validationResult } from 'express-validator'

import {

    obtenerTodosLosSuperheroesController,
    agregarSuperheroeController,
    editarSuperHeroeController,
    formAgregarSuperheroeController,
    obtenerSuperheroePorIdController,
    eliminarSuperheroePorIdController
} from '../controllers/superheroesController.mjs'

const router = express.Router()

router.use((req, res, next) => {
    console.log(`Solicitud entrante: ${req.method} ${req.url}`);
    next();
  });

router.get('/heroes', obtenerTodosLosSuperheroesController)
router.get('/heroes/agregar', formAgregarSuperheroeController)
// router.post('/heroes',agregarSuperheroeController)
router.post('/heroes', [body('nombreSuperheroe')
    .notEmpty()
    .withMessage('El nombre de Superheroe es requerido')
    .trim()
    .isLength({ min: 3, max: 60 })
    .withMessage('El nombre debe tener minimo 3 caracteres y maximo 60'),
body('nombreReal').notEmpty()
    .withMessage('El nombre real es requerido')
    .trim()
    .isLength({ min: 3, max: 60 }),
body('edad')
    .notEmpty()
    .withMessage('La edad es requerida')
    .trim()
    .isNumeric().withMessage('La edad debe ser un número.')
    .isFloat({ min: 0 }).withMessage('La edad no puede ser negativa.'),
// body('poderes').notEmpty().isArray({ min: 1 }).withMessage('El campo poderes debe ser un array no vacío.'),
// body('poderes.*').trim()
//     .isString().withMessage('Cada poder debe ser un texto.')
//     .isLength({ min: 3 }).withMessage('Cada poder debe tener al menos 3 caracteres.')
//     .isLength({ max: 60 }).withMessage('Cada poder no puede exceder los 60 caracteres.'),
], agregarSuperheroeController)
router.get('/heroes/:id/editar',obtenerSuperheroePorIdController)
router.post('/heroes/:id/editar', editarSuperHeroeController)
router.post('/heroes/:id/eliminar', eliminarSuperheroePorIdController)

export default router