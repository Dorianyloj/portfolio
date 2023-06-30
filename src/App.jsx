
import Home from "../src/Pages/Home"
import About from "../src/Pages/About"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";
function App() {

    return (
        <>
            <div className="App">
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/about' element={<About />}></Route>
                        <Route path='/project' element={<Project />}></Route>
                        <Route path='/contact' element={<Contact />}></Route>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
