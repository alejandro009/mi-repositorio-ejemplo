import express from 'express'
import { connectDB } from './src/config/dbConfig.mjs'
import router from './src/routes/superheroRoutes.mjs'
import path from 'path'
import expressLayouts from 'express-ejs-layouts'

const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.resolve('./src/views'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(expressLayouts)
app.use(express.static(path.resolve('./src/public')))

app.set('layout', 'layout')


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Pagina Principal',
    })
})
connectDB()

app.use('/api', router)

app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontradas" })
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})