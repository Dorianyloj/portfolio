import React from 'react'
import NavBar from '../components/NavigationBar'
import Contactpage from "../components/Contactpage.jsx";

function Contact() {
    return (
        <div className="ProjectPage">
            <NavBar />
            <div className="Contact">
                <Contactpage/>
            </div>
        </div>
    )
}

export default Contact