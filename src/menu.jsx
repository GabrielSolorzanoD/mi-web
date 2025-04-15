import React from "react";
import { Link } from "react-router-dom";

function Menu(){

    return(
        <div>
            
            
            
            
            {/* <Link to={"/viedeoJuegosFORM"}>VJ-FORM</Link>
            <Link to={"/celularesFORM"}>cel-FORM</Link> */}

            <nav className="navbar navbar-expand-lg text-white bg-dark bg-gradient">
                <div className="container-fluid">
                    <Link to={"/"} className="nav-link text-white"><h2>Gabriel Solorzano</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link text-white">Acerca de mi</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/estudios"} className="nav-link text-white">Estudios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/viedeoJuegos"} className="nav-link text-white">Experiencia Laboral</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/viedeoJuegos"} className="nav-link text-white">Proyectos</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}

export default Menu