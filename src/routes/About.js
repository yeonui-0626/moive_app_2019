import React from "react";
import "./About.css"
function About(props){
    console.log(props);
    return(
        <div className="about__container">
            <span>
                "This is React Toy Project!"
            </span>
            <span>Lee Yeon Ui, 2021.07.22</span>
        </div>
    )
}

export default About;