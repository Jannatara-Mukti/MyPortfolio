import React from 'react';
import './Topbar.scss';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';


const Topbar = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"className="logo">Jannatara.</a>
                    <div className="temContainer">
                        <WhatsAppIcon className="icon"/>
                        <span>+88 01 622427120</span>
                    </div>
                    <div className="temContainer">
                        <EmailIcon className="icon"/>
                        <span>jannatara.mukti@gmail.com</span>
                    </div>
                   
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="lin1"></span>
                        <span className="lin2"></span>
                        <span className="lin3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topbar;