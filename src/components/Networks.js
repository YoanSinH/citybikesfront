import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal";

const Networks = ({data, loading}) => {
    const [network, setNetwork] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function openModal(stOpen,href){
        try {
            let link = "http://api.citybik.es"+href
            async function getDNetwork() {
                const response = await axios.get(link);
                setNetwork(response.data.network);
                console.log("API Response, fetching to modal: ",response.status);
            }
            getDNetwork();
            setIsOpen(stOpen);
        } catch (error) {
            console.log("Failed opening Modal:", error);
        }
    }

    return <div className="item-container">
        {isOpen ? (<Modal setIsOpen={setIsOpen} data={network}/>) : null}
        {data.map(networkInfo => {
            return(
                <div className="card" key={networkInfo.id} onClick={() => openModal(true,networkInfo.href)}>
                    <div className="containercard">
                        <h4>{networkInfo.name}</h4>
                        <p>{networkInfo.location.city}</p>
                        <p>{networkInfo.location.country}</p>
                    </div>
                </div>
            )
        })}
    </div>
};

export default Networks;