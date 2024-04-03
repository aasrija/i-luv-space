import React from 'react';
import {Button} from './Button';

function MainVid() {
    return (
        <div className= 'video-container'>
            <video src='/videos/travel-main.mp4' autoPlay loop muted />
            <h1>LETS EXPLORE SPACE TOGETHER</h1>
            <p> beyond the solar system, the stars and our galaxy</p>
            <div className='main-btn'>
                <Button classNAme='btns' buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    LET'S GO
                </Button>
                <Button classNAme='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    LET'S GO
                </Button>
            </div>
        </div>
    )
}

export default MainVid;