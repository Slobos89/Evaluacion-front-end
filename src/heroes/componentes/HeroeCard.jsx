
import { Link } from "react-router-dom"
import "./style.css"

export const HeroeCard = ({id,nombre,tipo,origen,descripcion}) => {
    const imgSrc=`/assets/heroes/${id}.jpg`  
  return (
        <div className="card mb-4" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imgSrc} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="card-title">{nombre}</div>
                        <div className="card-text">Descripcion: {descripcion}</div>
                        <Link to={`/hero/${id}`}>Ver mas...</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
