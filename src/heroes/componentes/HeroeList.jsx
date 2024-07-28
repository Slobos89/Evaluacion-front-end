import { getHeroesByTipo } from "../helpers/getHeroesByTipo"
import {HeroeCard} from "./HeroeCard"


export const HeroeList = ({tipo}) => {

  const heroes = getHeroesByTipo(tipo);

  return (
    <>

        <div className="container">

            <div className="col-md-8 offset-md-2">
                {
                    heroes.map(hero => (
                        <HeroeCard key={hero.id} {...hero}/>
                    ))
                }
            </div>

        </div> 
    </>
  )
}
