import React from 'react';
import img1 from '../../images/project_1.png';
import img2 from '../../images/project_2.png';
import img3 from '../../images/project_3.png';
import { Button, Paper, Typography, Box, ListItemText } from '@mui/material';
import './Projects.scss';

const Projects = () => {
    const data =[{
        img: img1,
        name: "Best_Cycle",
        point1: "-> The user can view the product image, price, and order according to their preferences.",
        point2: "-> Admin can add a new product and also delete the existing product.",
        point3: "-> The user's order will be shipped once it has been approved by the admin.",
        link: "https://best-cycle-38ca5.web.app/"
    },
    {
        img: img2,
        name: "Tour_Maker",
        point1: "-> The users will be able to know pre-made tour plans and also book according to their preferences.",
        point2: "-> A tour plan can be added by an administrator and deleted after it has been executed.",
        point3: "-> A user will only be selected for a tour when their status has been approved by the admin.",
        link: "https://tourmaker-react.web.app/"
    },
    {
        img: img3,
        name: "Doc_City",
        point1: "-> Doc_city offers its users a list of services and the option to book an appointment according to their requirements.",
        point2: "-> The Doc_city website also shares information about all departments.",
        point3: "-> Patients will be able to know about Doc_city's specialist.",
        link: "https://doccity-47e1d.web.app//"
    }
];

    return (
        <div className='project-section'>
            {
                data.map(dt => (
                    <div className="projects">
                    <div className="left">
                        <img src={dt.img} alt="" />
                     </div>
                    <div className="right">
                        <Paper elevation={3} sx={{p:3, mx: 4}}>
                            <Typography className="p-title" variant="h6" gutterBottom component="div">
                                {dt.name}
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Project Overview
                            </Typography>
                            <Box className="description">
                                <Typography className="list1" variant="subtitle1">{dt.point1}</Typography>
                                <Typography className="list1" variant="subtitle1">{dt.point2}</Typography>
                                <Typography className="list1" variant="subtitle1">{dt.point3}</Typography>
                            </Box>
                           
                            <a href={dt.link} target="_blank"><Button variant="contained" style={{backgroundColor: "#15023A", borderRadius: "10px", fontSize: "11px"}}>See Live Website</Button></a>
                        </Paper>
                    </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;