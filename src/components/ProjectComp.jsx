import React from 'react';

function ProjectComp (props){

    return(
        <>
            <div className="myCard">
                <div className="innerCard">
                    <div className="frontSide">
                        <img src={props.img} alt="image_project"/>
                    </div>
                    <div className="backSide">
                        <h1>{props.title}</h1>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectComp