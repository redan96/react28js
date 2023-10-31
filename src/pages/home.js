import React from "react"; 
import PostComponent from "../components/Post";
// import "../styles/home.css";

export default function HomePage() {
    return(
        <div className="main">
            <div className="entries">
                <PostComponent title="18 Life lessons I'd give my 18yo self" autor="Richard Gingras" creation="oct 6" 
                    description="Dating, success, making friends..." image="https://miro.medium.com/v2/resize:fill:200:134/0*dZJ-oQFBgymsAleq"/>
                <PostComponent title="Earthworms and Anhedonia" autor="Meredith Rofriguez" creation="Oct 8" 
                    description="Musings on a musical haunting" image="https://miro.medium.com/v2/resize:fill:200:134/0*5hJgvT1vt6PZRMd3"/>
                <PostComponent title="Under the Cedar Tree" autor="Caroline Mellor" creation="Oct 22" 
                    description="Prose Poetry" image="https://miro.medium.com/v2/resize:fill:200:134/1*VbCkG39Xi9-yQF8rRUVJWQ.jpeg"/>
                <PostComponent title="On complexity and Monoliths" autor="Mikael Vesavuori" creation="Oc" 
                    description="Putting microservices in a realistic light..." image="https://miro.medium.com/v2/resize:fill:200:134/1*ArPuNJFT76seq_Wmo-cJYg.png"/>
                <PostComponent title="Storytelling in New Yorker Drawings" autor="Liza Donnelly" creation="Sep 22" 
                    description="We love them because they're about us" image="https://miro.medium.com/v2/resize:fill:200:134/0*bYING74NilN3RVy3.jpeg"/>
                <PostComponent title="The Ideal Social Network" autor="Nir Zicherman" creation="Oct 23" 
                    description="Let's build a new social platform from scratch" image="https://miro.medium.com/v2/resize:fill:200:134/1*t3hdaziHXHF5RqNzUzI_Og.png"/>
                <PostComponent title="Let's Stop Calling it Content" autor="Clive Thompson" creation="Sep 29" 
                    description="Hollywood and tech firms want to reduce culture to a slurry..." image="https://miro.medium.com/v2/resize:fill:200:134/0*_AJrwSXVrWPtaRk7"/>
            </div>
            <div className="side-footer">
                <div className="topics-buttons">
                    <button className="btn bg-secondary">Programing</button>
                    <button className="btn bg-secondary">Data Science</button>
                    <button className="btn bg-secondary">Technology</button>
                    <button className="btn bg-secondary">Self improvement</button>
                    <button className="btn bg-secondary">Writing</button>
                    <button className="btn bg-secondary">Relationships</button>
                    <button className="btn bg-secondary">Machine Learning</button>
                    <button className="btn bg-secondary">Productivity</button>
                    <button className="btn bg-secondary">Politics</button>
                    <p className="text-success">See more topics</p>
                </div>
                <div className="extras">
                    
                </div>

            </div>
        </div>
        
    );
}


