import React from 'react';
import './MainContent.css';
import photoGrid from '../images/photo-grid.png';
import Card from './card/Card.js';


function MainContent()  {
    return(
        <div className='main-content'>
            <img className='photo-grid' src={photoGrid}/>
            <h1 className='header-exp'>Online Experiences</h1>
            <p className='header-text'>Join unique interactive activities ;ed by 
            one-of-a-kind hosts-all without leaving home.</p>
            <Card />
        </div>
    );
}

export default MainContent;