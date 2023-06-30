import React from 'react'
import NavBar from '../components/NavigationBar'
import ProjectComp from "../components/ProjectComp.jsx";
const imageP1 = "https://i.ibb.co/YcxyHLL/chess.png"
const imageP2 = "https://i.ibb.co/gPBnP58/doctor.png"
const imageP3="https://i.ibb.co/c24P22z/castle.png"

function Project() {
    return (
        <div className="ProjectPage">
            <NavBar />
            <div className="Cards">
                <ProjectComp img={imageP1} title="Chess Game"/>
                <ProjectComp img={imageP2} title="Great Wise Medecin"/>
                <ProjectComp img={imageP3} title="Nothing To Lord"/>
            </div>
        </div>
    )
}

export default Project