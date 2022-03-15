import React from "react"

//importando funcion para traer peticiones
import { getGifs } from "../helpers/http";

export const useFetchGifs = (category) => {
    //estado inicial
    const [state, setState] = React.useState({
        data: [],
        loading: true
    })

    React.useEffect(() => {
        getGifs(category).then(result => {
            if (result) {
                //cargamos con un settimeout
                setTimeout(() => {
                    setState({ loading: false, data: result });
                }, 3000)
            }
        })
    }, [category])

    return state;
}