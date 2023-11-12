import React, { useEffect, useState } from "react"; 
import Post from "../../components/Post/Post";
import "./home.scss"

export default function HomePage() {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(()=> {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data)=> {
                setBlogs(data);
                setIsPending(false);
            });
    }, []);

    return(
        <div className="home">

           {blogs && <Post blogs={blogs} title="Main Blogs" /> }
        </div>
        
    );
}



