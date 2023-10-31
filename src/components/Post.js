import React from "react";

export default function PostComponent(props) {
    const {title, autor, creation, description, image}= props

    return (
        <div className="post card d-flex">
            <div className="post-info card-body ">
                <h4 className="titulo card-title">{title}</h4>
                <p className="autor card-subtitle">{autor}</p>
                <p className="descripcion card-text">{description}</p>
                <p className="creacion">{creation}</p>
            </div>
            <div className="image-div">
                <img src={image} /> 
            </div>
        </div>
    )
}



