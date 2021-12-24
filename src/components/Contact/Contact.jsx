import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import bg from '../../images/contact.jpg';

const ContactBg = {
    background: `url(${bg})`,
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    backgroundBlendMode: 'darken, luminosity',
    backgroundColor: 'rgba(19, 15, 64, .9)'
}

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_odw4bkw', 'template_pts2ctj', form.current, 'user_EZjwJKihAOpJ8u9DCkj0B')
        .then((result) => {
           alert("Messege sent Successfully!");
        }, (error) => {
            alert(error.message);
        });

        e.target.reset();
    };

    return (
        <div id="contact">
            <Box style={ContactBg} sx={{ flexGrow: 1, py: "60px", px: "50px",textAlign: "center"}}>
            <Typography variant="h4" sx={{pb: 3, textAlign: 'center', color: 'white'}}> Contact  </Typography>
            <form ref={form} onSubmit={sendEmail}>
                <TextField id="standard-basic" label="Name" name="client-name" variant="standard" sx={{backgroundColor: 'white', width: "75%", mb: 3}} />
                <br />
                <TextField id="standard-basic" label="Email" name="email" variant="standard" sx={{backgroundColor: 'white', width: "75%", mb: 3}}/>
                <br />
                <TextField id="standard-basic" label="Massage" name="message" variant="standard" sx={{backgroundColor: 'white', width: "75%", mb: 3}}/>
                <br />
                <Button type="submit" sx={{width: "75%", color: 'white', borderColor: 'white'}} variant="outlined">Submit</Button>
            </form>
        </Box>
        </div>
    );
};

export default Contact;