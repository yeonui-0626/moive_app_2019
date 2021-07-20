import React from "react";

function About(props){
    console.log(props);
    return(
        <div className="about__container">
            <span>
                "Freedom id the freedom to say that two plus two make four. If that i granted, all else follows."
            </span>
            <span>- Lee Yeon Ui, 1997</span>
        </div>
    )
}

export default About;