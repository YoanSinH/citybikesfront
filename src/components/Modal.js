import React from "react";
import "../styles/Modal.css";

const Modal = ({ setIsOpen, data }) => {
    if (!data) return (
        <><div className="darkBG" /><div className="centered"><div className="modal"><div className="modalHeader"><h5 className="heading">Cargando</h5></div></div></div></>
    )
    const stations = data.stations;
    const msg = "No data";
    let totalbikes = 0;
    let totalslots = 0;

    console.log("a",data);
    
    function closed() {
        console.log("antes", data);
        setIsOpen(false);
        data = null;
        console.log("despues", data);
    }

    for (let i in data.stations) {
        if(data.stations[i].free_bikes == null){
            totalbikes = 0;
        }else if(data.stations[i].empty_slots == null){
            totalslots = 0;
        }else{
            totalbikes = totalbikes + data.stations[i].free_bikes
            totalslots = totalslots + data.stations[i].empty_slots
        }
    }

    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Información de {data.name}</h5>
                    </div>
                    
                    <button className="closeBtn" onClick={() => closed()}>X</button>
                    <div className="modalContent">
                        <p><span>Compañia</span> {data.company[0]}</p>
                        <p><span>País</span> {data.location.country}</p>
                        <p><span>Ciudad</span> {data.location.city}</p>
                        <p><span>Ciclas disponibles</span> {totalbikes}</p>
                        <p><span>Espacios libres</span> {totalslots}</p>
                        <br/><hr></hr>
                        <h4 className="heading">Estaciones</h4>
                        <div className="stationsContainer">
                            {stations.map(stations => {
                                if(stations.free_bikes != null && stations.empty_slots != null){
                                    var freeb = stations.free_bikes;
                                    var emplys = stations.empty_slots;
                                }else{
                                    freeb = emplys = 0;
                                }
                                return(
                                    <div className="station" key={stations.id}>
                                        <h3>{stations.name}</h3>
                                        <p><span>Actualización</span> {String(new Date(stations.timestamp))}</p>
                                        <p><span>Bicicletas Libres</span> {stations.free_bikes === null ? msg : stations.free_bikes}</p>
                                        <p><span>Espacios Libres</span> {stations.empty_slots === null ? msg : stations.empty_slots}</p>
                                        <p><span>Total Espacios</span> {freeb+emplys}</p>
                                        <p><a href={"http://maps.google.com/maps?q=" + stations.latitude + "," + stations.longitude} target={"_blank"} rel="noopener noreferrer">Ver en mapa</a></p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;