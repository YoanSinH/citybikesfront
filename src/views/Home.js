import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

export function Home() {
    const navigate = useNavigate();

    const changeView = () => {
        try {
            navigate("/networks")
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <main>
            <section className="hero">
                <div className="hero__bg">
                    <picture>
                        <img src="https://www.centropolismedellin.com/wp-content/uploads/2019/07/Encicla-3.jpg"/>
                    </picture>
                </div>
                <header className="hero__cnt">
                    <h1>CITYBIKES FRONTAL</h1>
                    <p>Información general de las redes<br/> de bicicletas del mundo.</p>
                    <button className="button" onClick={changeView}>Ver redes</button>
                </header>
                <footer className="hero__ftr">
                    <p className="link">⚡ by <a href="https://www.citybik.es/">Citybik.es</a></p>
                    <p className="link">👨‍💻 by <a href="https://github.com/YoanSinH/CityBikesFront">YoanSinH</a> </p>
                </footer>
            </section>
        </main>
    )
}