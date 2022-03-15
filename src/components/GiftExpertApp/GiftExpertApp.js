import React from "react";

//importanto addcaegory
import AddCategoryComponent from "../AddCategory/";
///improtanto gifgrid
import GifGridComponent from "../GifGrid/";

const GiftExpertAppComponent = (props) => {

    const [categories, setCategories] = React.useState([])//constante qyue posee los personajes

    const [form, setForm] = React.useState({ categoria: '' })//iniciamos el estado del formulario


    //funcion para cambiar el estado
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    //funcion que agregara nuevas categorias
    const handleAdd = (e) => {
        e.preventDefault();

        if (form.categoria.trim().length > 2) {
            setCategories([form.categoria, ...categories])//de esta forma agregamos al arreglo en el estado
            setForm({ ...form, categoria: '' })
        }
    }

    //iterando las categorias
    const lista = categories.map(item => {
        return <GifGridComponent category={item} key={item} />
    })

    //retornando html
    return (
        <>
            <h2>GiftExpertApp</h2>
            <hr />
            <AddCategoryComponent
                handleAdd={handleAdd}
                setForm={setForm}
                form={form}
                handleChange={handleChange}
            />
            <ul>
                {lista}
            </ul>
        </>
    )
}


export default GiftExpertAppComponent;