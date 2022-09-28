import React,{useState,useEffect} from "react";
import axios from "axios";
import Networks from "../components/Networks";
import Pagination from "../components/Pagination";
import styles from "../styles/Bikes.css";


export function Bikes() {
    const [networks,setNetworks] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(9);

    useEffect(() => {
        try {
            async function getNetwork(){
                const response = await axios.get("http://api.citybik.es/v2/networks");
                setNetworks(response.data.networks);
                console.log(response)
            }
            getNetwork();
        } catch (error) {
            console.log("flag1: ",error)
        }
    }, []);

    if (!networks) return (<><br/><h2>Cargando</h2></>);

    const indexLastData = currentPage * dataPerPage;
    const indexFistData = indexLastData - dataPerPage;
    const currentData = networks.slice(indexFistData, indexLastData);
    console.log(currentData)

    return (
        <>
        <h1>{networks.length} Compañias </h1><p>Mostrando: {dataPerPage}</p>
        
        <Networks data={currentData} loading={loading}/>
        <Pagination dataPerPage={dataPerPage} totalData={networks.length}/>
        </>
    )
}