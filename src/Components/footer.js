import React from "react";
import zuri from '../Images/zuri.svg';
import I4G from '../Images/I4G.svg';
import './footer.css'

function Footer(){
    return(
        <footer>
            <img src={zuri} alt= 'Zuri' />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={I4G} alt= 'I4G' />
        </footer>
    )
}

export default Footer