import React,{useState,useEffect} from "react";
import axios from "axios";
import styles from "../styles/Modal.css";

const Modal = ({setIsOpen, id}) => {
    const [networkInfo,setNetworkInfo] = useState(null);

    /*useEffect(() => {
        try {
            async function getNetwork(){
                const response = await axios.get("http://api.citybik.es"+id);
                setNetworkInfo(response.data.networkInfo);
                console.log("netinfo",response);
            }
            getNetwork();
        } catch (error) {
            console.log("flag1: ",error)
        }
    }, []);*/


    return (
        <>
        <div className="darkBG" onClick={() => setIsOpen(false)}/>
        <div className="centered">
            <div className="modal">
                <div className="modalHeader">
                    <h5 className="heading">Información de networkInfo.name</h5>
                </div>
                <hr></hr>
                <button className="closeBtn" onClick={() => setIsOpen(false)}>X</button>
                <div className="modalContent">
                    <p><span>Compañia</span> networkInfo.company[0]</p>
                    <p><span>País</span> networkInfo.location.country</p>
                    <p><span>Ciudad</span> networkInfo.location.city</p>
                    <p><span>Ciclas disponibles</span> freebikestotal</p>
                    <p><span>Espacios libres</span> freespaces</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal;