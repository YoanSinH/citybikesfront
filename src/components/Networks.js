import React, {useState} from "react";
import Modal from "./Modal";

const Networks = ({data, loading}) => {
    const [isOpen, setIsOpen] = useState(false);
    if(loading) return <p>Loading</p>

    return <div className="item-container">
        <button onClick={() => setIsOpen(true)}>mod</button>
        {isOpen && <Modal setIsOpen={setIsOpen}/>}
        {data.map(networkInfo => {
            return(
                <div className="card" key={networkInfo.id}>
                    <div className="containercard">
                        <h4>{networkInfo.name}</h4>
                        <p>{networkInfo.location.city}</p>
                        <p>{networkInfo.location.country}</p>
                        <button className="button">Más info</button>&nbsp;
                        <button className="button">Mapa</button>
                    </div>
                </div>
            )
        })}
    </div>
};

export default Networks;