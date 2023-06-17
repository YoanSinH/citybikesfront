import React, { useState, useEffect } from "react";
import axios from "axios";
import Networks from "../components/Networks";
import "../styles/App.css";
import "../styles/Bikes.css";

export function Bikes() {
    const bottomRef = React.useRef(null);
    const [networks, setNetworks] = useState(null);
    const [loading] = useState(false);
    const [currentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(9);

    useEffect(() => {
        try {
            async function getNetwork() {
                const response = await axios.get("http://api.citybik.es/v2/networks");
                setNetworks(response.data.networks);
                console.log("API Response:",response.status)
            }
            getNetwork();
        } catch (error) {
            console.log("Failed getting API Response:", error)
        }
    }, []);

    if (!networks) return (<><div className="lds-facebook"><div></div><div></div><div></div></div></>);

    const loadData = () => {
        setDataPerPage(dataPerPage + 9);

        setTimeout(() => {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }

    const indexLastData = currentPage * dataPerPage;
    const indexFistData = indexLastData - dataPerPage;
    const currentData = networks.slice(indexFistData, indexLastData);

    return (
        <>
            <div className="container-title">
                <h1>Citybikes</h1>
            </div>
            <div>
                <div className="REMOVEcontainernetworks">
                <Networks data={currentData} loading={loading} />
                </div>
                <div className="load-more-div">
                    <button className="button" onClick={loadData}>Cargar más</button>
                </div>
                <div ref={bottomRef} />
            </div>
        </>
    )
}