import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Users from './Users'
import About from './About'
import Initial from './Initial'


export default function Home(){

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'blue',
    }

    const divStyle = {
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }

    return (
        <div>
            <header style={divStyle}>

                <Link to='/' style={linkStyle}>Home</Link>
                <Link to='/users' style={linkStyle}>Usuários</Link>
                <Link to='/about' style={linkStyle}>Sobre</Link>

            </header>

            <main>
                <Routes>
                    <Route path="/" element={<Initial />} exact></Route>
                    <Route path="/users" element={<Users />}></Route>
                    <Route path="/about" element={<About />}></Route>
                </Routes>
            </main>
        </div>
    )

}