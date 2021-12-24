import './Menu.scss';

const menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}><a href="#intro">Intro</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#about">About</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#projects">Projects</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#testimonial">Testimonial</a></li>
                <li onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default menu;