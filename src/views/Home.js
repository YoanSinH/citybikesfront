import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../App.css";
import { Menu } from "./Menu";
import { Bikes } from "./Bikes";

export function Home() {
    const {pressed} = Menu()
    function enteredBtn(btnpressed) {
        if (btnpressed) {
            return ( <Bikes/> ) 
        }else{
            return ( <Home/> )
        }
    }
    return (
        <div>
            <Menu/>
        </div>
    )
}