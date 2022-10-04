import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/App.css";

export function Menu() {
    const navigate = useNavigate();

    const changeView = () => {
        try {
            navigate("/networks")
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <div className='container'>
            <div className="session" style={styles.session}>
                <div className="left" style={styles.left}>
                </div>
                <div className='form'>
                    <h4 className='h4'><span>CityBikes</span></h4>
                    <p className='p'>Información general de las redes de bicicletas del mundo.<br />
                        <br />
                        <a href='https://github.com/YoanSinH' target={'_blank'} rel="noopener noreferrer">› Github</a><br />
                        <a href='http://api.citybik.es/v2/' target={'_blank'} rel="noopener noreferrer">› API</a><br />
                        <br/>
                    </p>
                    <button className='button' type="submit" onClick={changeView}>Entrar</button>
                </div>
            </div>
        </div>
    )
}