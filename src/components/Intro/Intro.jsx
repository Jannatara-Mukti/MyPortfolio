import React, { useEffect, useRef } from 'react';
import './Intro.scss';
import img from '../../images/me1.png';
import { init } from 'ityped';

const Intro = () => {

    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current,
            {
                showCursor: true,
                backDelay: 2000,
                strings: ['Jannatara Mukti' ] 
            })
    }, []);

    return (
        <div className="intro" id="intro">
           <div className="left">
               <div className="imgContainer">
                    <img src={img} alt="" />
               </div>
           </div>
           <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1><span ref={textRef}></span></h1>
                    <h3>MERN Stack Developer</h3>
                    <span><a className="resume" href="assets/doc/Jannatara Mukti.pdf" download>Download Resume</a></span>
                </div>
                <a href="#projects" className="downImg">
                    <img src="assets/down.png" alt="" />
                </a>
           </div>
        </div>
    );
};

export default Intro;