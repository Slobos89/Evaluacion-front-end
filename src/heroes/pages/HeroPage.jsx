
import { useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../helpers/getHeroesById';
import { useEffect } from 'react';
import "../componentes/style.css"



export const HeroPage = () => {
    const {id} = useParams();
    const hero = getHeroesById(id);
    const navigate = useNavigate();

    useEffect(() => {
        if (!hero) {
            Swal.fire({
                icon: "error",
                title: "Este comic no existe",
                showDenyButton: true,
                confirmButtonText: "ir a Anime",
                denyButtonText: `ir a Comic`
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/anime");
                } else if (result.isDenied) {
                    navigate("/comics");
                }
            });
        }
    }, [hero, navigate]);
    

    const handleReturn = () => {
        if (hero?.tipo === "anime") {
            navigate("/anime");
        } else {
            navigate("/comics");
        }
    };

    if (!hero) {
        return null; 
    }

    return (
        <div className="card container contenedor">
            <img src={`/assets/heroes/${hero.id}.jpg`} alt={`Imagen de ${hero.nombre}`} />
            <div className="card-body">
                <p className="card-text">Nombre: {hero.nombre}</p>
                <p className="card-text">Origen: {hero.origen}</p>
                <p className="card-text">Descripcion: {hero.descripcion}</p>
                <p className="card-text">Tipo: {hero.tipo}</p>
            </div>
            <div className="button-container">
                <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
            </div>
        </div>
    );
};
