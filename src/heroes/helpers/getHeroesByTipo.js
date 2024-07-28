import {heroes} from '../data/heroes'

export const getHeroesByTipo=(tipo)=>{
    const aux = ["comic","anime"];

    if(!aux.includes(tipo)){
        throw new Error(`el tipo no se encuentra: "${tipo}"`)
    }

    return heroes.filter(hero=>hero.tipo===tipo)
}