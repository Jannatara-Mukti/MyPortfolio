import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './About.scss';
import { Typography } from '@mui/material';

const About = () => {
    return (
        <div className='about'> 
            <div className="description">
                <p>Hello, This is Jannatara Mukti. I am in the web development field for the last 2 years. I have created a lot of projects using MERN Stack technologies. When I started I knew nothing and it was a difficult decision for me to decide on what technology to specialize in. During my graduation, I touched everything a bit, but I didn't know much about anything. After evaluating some technologies, I finally decided to develop with MERN Stack. And now I love MERN. Finally, I am enjoying my work.</p>
                <p className='basic'>Basic Info:</p>
                <div className="info">
                    <div className="left">
                        <strong>Name:</strong>
                        <strong>Jannatara Mukti</strong>
                    </div>
                    <div className="right">
                        <strong>Email:</strong>
                        <strong>jannatara.mukti@gmail.com</strong>
                    </div>
                </div>
                <div className="info">
                    <div className="left">
                        <strong>Github:</strong>
                        <strong>https://github.com/Jannatara-Mukti</strong>
                    </div>
                   
                </div>
            </div>
            <div className="skills">
            <Box width={300}>
                <h3 className='skill-title'>My Skills</h3>
                <Typography>Javascript</Typography>
                <Slider aria-label="Always visible" defaultValue={70} step={10} valueLabelDisplay="on" />
                <Typography>React Js</Typography>
                <Slider defaultValue={70} aria-label="Default" valueLabelDisplay="on" />
                <Typography>Node Js</Typography>
                <Slider defaultValue={60} aria-label="Default" valueLabelDisplay="on" />
                <Typography>Mongodb</Typography>
                <Slider defaultValue={60} aria-label="Default" valueLabelDisplay="on" />
            </Box>
            </div>
        </div>
    );
};

export default About;