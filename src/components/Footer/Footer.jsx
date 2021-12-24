import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{color: "#15023a", textAlign: 'center', py: 2}}>
            <Typography variant="subtitle2" gutterBottom component="div">
                copyright@2021. Made by Jannatara Mukti.
            </Typography>
        </Box>
    );
};

export default Footer;