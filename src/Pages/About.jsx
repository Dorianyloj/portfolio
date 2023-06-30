import React from 'react'
import NavBar from '../components/NavigationBar'
import Aboutpage from '../components/Aboutpage'

function About() {
    return (
        <div className="Aboutpage">
            <NavBar />
            <div className="mainAbout">
                <Aboutpage/>
            </div>
        </div>
    )
}

export default About