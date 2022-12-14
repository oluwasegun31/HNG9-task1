import React from "react";
import dataLink from "../Data/data";
import './link.css'
import github from '../Images/Social icon.svg'
import slack from '../Images/slack.svg';
import { Link } from "react-router-dom";

function Links(){
    const dataItem = dataLink.map((items, pos)=> {
        return(
            <div className='btn' key={pos}>
                <a id={items.id} href={items.link}>{items.title}</a>
            </div>     
        )
    })
    return(
        <main>
            {dataItem}
            
            <div className="btn">
            <Link  to='/contact'>
                <button id="contact">Contact me</button>
            </Link>
            </div>
            
            <div className="social-links">
                <img src={github} alt='Github' />
                <img src={slack} alt='Slack' />
            </div>
        </main>
    )
}

export default Links