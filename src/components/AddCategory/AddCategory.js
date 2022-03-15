import React from "react";

const AddCategoryComponent = ({ setForm, form, handleAdd, handleChange }) => {

    return (
        <form onSubmit={handleAdd} onChange={handleChange}>
            <h2>Agregar categoria</h2>
            <input type="text" name="categoria" value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })} />
            <button type="submit">Agregar</button>
        </form>
    )
}

export default AddCategoryComponent