import React,{useState,useEffect} from "react";
import axios from "axios";
import styles from "../styles/Bikes.css";

export function Bikes() {
    const [networks,setNetworks] = useState(null);

    useEffect(() => {
        try {
            async function getNetwork(){
                const response = await axios.get("http://api.citybik.es/v2/networks");
                setNetworks(response.data.networks);
            }
            getNetwork();
        } catch (error) {
            console.log("flag1: ",error)
        }
    }, []);

    if (!networks) return (<h2>No data</h2>);

    return (
        <>
        <h1>{networks.length} Compañias</h1>
        <div className={"pagination"}>
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#">6</a>
                <a href="#">&raquo;</a>
        </div>
        <div>
            {networks.map(networkInfo =>{
                return(
                    <div className="card" key={networkInfo.id}>
                    <div className="containercard">
                        <h4>{networkInfo.name}</h4>
                        <p>{networkInfo.location.city}</p>
                        <p>{networkInfo.location.country}</p>
                        <button>Más Información</button>
                    </div>
                    </div>
                )
            })}
        </div>
    
        </>
    )
}