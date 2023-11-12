import React from "react";
import "./post.scss";

export default function PostComponent({ blogs }) {

    return (
        <div className="all-posts">
            {blogs.map(blog => (
            <div className="container" key={blog.id}>
                <div className="info-container">
                    <h4 className="title">{blog.title}</h4>
                    <p className="autor">{blog.author}</p>
                    <p className="content">{blog.body}</p>
                </div>
                <div className="image-div">
                    <img className="imagen" src={"https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais"} /> 
                </div>
            </div>
            ))}
        </div>
    )
}



