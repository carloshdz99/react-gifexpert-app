import axios from "axios";

//tomando variable de entorno
const Base_url = process.env.BASE_URL;

//funcion que realizara las peticiones get
export const http_get = (endpoint) => {
    //ruta
    const url = `https://api.giphy.com/v1/gifs/search/${endpoint}`

    //realizando peticion
    const data = axios.get(url).then(response => { return response }).catch(error => { console.log(error); })

    //retornando la funcion
    return data;
}

export const getGifs = async (category) => {
    const search = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=YX5JzdLw4Nz4jkYdzmkwucbr4CPq2Lw0`
    const response = await fetch(search)
    const { data } = await response.json()

    //iteramos para pasarlo al estado
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs
}


