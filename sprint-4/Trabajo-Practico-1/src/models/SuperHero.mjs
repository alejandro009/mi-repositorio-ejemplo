import mongoose from 'mongoose'

const superheroSchema = new mongoose.Schema({
    nombreSuperheroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
    debilidad: {type:String},

}, { collection: 'Grupo-03' })

export default mongoose.model('SuperHero', superheroSchema)