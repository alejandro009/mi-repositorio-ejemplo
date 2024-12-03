import express from 'express'
import { connectDB } from './config/dbConfig.mjs'
import router from './routes/superheroRoutes.mjs'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.set('view engine','ejs')
connectDB()

app.use('/api', router)

app.use((req, res) => {
    res.status(404).send({mensaje:"Ruta no encontradas"})
})

app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})