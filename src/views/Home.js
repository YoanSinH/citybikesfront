import { useNavigate } from 'react-router-dom';
import styles from '../App.css';

export function Home() {
    const navigate = useNavigate();

    const changeView = () => {
        try {
            navigate("/b")
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='container'>
            <div className="session" style={styles.session}>
                <div className="left" style={styles.left}>
                    .............
                </div>
                <div className='form'>
                    <h4 className='h4'><span>CityBikes</span></h4>
                    <p className='p'>Información general de la API <a href='https://citybik.es' target={'_blank'}>Citybik.es</a><br />
                        <br />
                        <a href='https://github.com/YoanSinH' target={'_blank'}>› Github</a><br />
                        <a href='http://api.citybik.es/v2/' target={'_blank'}>› API</a><br />
                        <br/>
                    </p>
                    <button className='button' type="submit" onClick={changeView}>Entrar</button>
                </div>
            </div>
        </div>
    )
}