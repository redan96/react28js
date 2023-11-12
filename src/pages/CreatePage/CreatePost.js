import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./create.scss";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("author1");

    const handleSubmit =(e)=>{
        e.preventDefault();


        const blog = {
            title,
            body,
            author};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=> {

        })
    }

    return(
        <div className="container">
            <Navbar/>
            <div className="form-container">
            <form onSubmit={handleSubmit} className="form-group">
                <input required
                    type="text"
                    placeholder="El Titulo"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                    ></input>
                <textarea required
                    placeholder="Contenido de tu publicacion"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    ></textarea>
                <select 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="author1" >Author 1</option>
                    <option value="author2" >Author 2</option>
                    <option value="author3" >Author 3</option>
                </select>
                    <div>
                <button type="submit" className="boton-publicar">Publicar</button>
                {/* <button className="boton-imagen">Añadir Imagen</button> */}
            </div>
            </form>
            </div>
        </div>
    )
}

