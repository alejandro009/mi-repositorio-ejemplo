import { leerSuperheroes ,agregarSuperHeroes} from "./utils.mjs";


const archivoOriginal = './superheroes.txt'
const archivoNuevos = './agregarSuperheroes.txt'

agregarSuperHeroes(archivoOriginal,archivoNuevos)

const superheroes = leerSuperheroes(archivoOriginal)

console.log('Superheroes Ordenados:');
console.log(superheroes);