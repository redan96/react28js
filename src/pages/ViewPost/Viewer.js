import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post"

export default function Viewer() {
    const [blog, setBlog] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data)=> {
                setBlog(data);
            });
    }, []);

    return (
        <div>
            <Navbar/>
            {<Post blog={blog} key={blog.id} title="viewer-post" /> }
        </div>

        // <div className="container">
        //     <Navbar/>
        //     <div className="post-box" key={blog.id}>
        //         <div className="info-container">
        //             <h4 className="title">{blog.title}</h4>
        //             <p className="autor">{blog.author}</p>
        //             <p className="content">{blog.body}</p>
        //         </div>
        //         <div className="image-div">
        //             <img className="imagen" src={"https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais"} /> 
        //         </div>
        //     </div>
        // </div>

    )
}


