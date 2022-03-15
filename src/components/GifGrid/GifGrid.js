import React from "react";

//importando funcion para traer peticiones
import { getGifs } from "../../helpers/http";
//importando custom hook
import { useFetchGifs } from "../../hooks/useFetchGifs";

const GifGridComponent = ({ category }) => {

    const { data, loading } = useFetchGifs(category)

    return (
        <>
            {loading ? <p className="animate__animated animate__fadeInLeftBig">Cargando...</p> :
                <div className="card-grid animate__animated animate__bounce animate__delay-2s">

                    {data.map(item => (
                        <div className="card" key={item.id}>
                            <h3>{item.title}</h3>
                            <img src={item.url} key={item.id} />
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default GifGridComponent