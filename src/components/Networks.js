import React from "react";

const Networks = ({data, loading}) => {
    if(loading) return <p>Loading</p>

    return <div className="item-container">
        {data.map(networkInfo => {
            return(
                <div className="card" key={networkInfo.id}>
                    <div className="containercard">
                        <h4>{networkInfo.name}</h4>
                        <p>{networkInfo.location.city}</p>
                        <p>{networkInfo.location.country}</p>
                        <button className="button">Más info</button>
                    </div>
                </div>
            )
        })}
    </div>
};

export default Networks;