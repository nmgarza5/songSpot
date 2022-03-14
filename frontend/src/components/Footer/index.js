import { FaReact, FaNodeJs, FaLinkedin } from "react-icons/fa";
import { SiRedux, SiSequelize, SiPostgresql, SiGithub } from "react-icons/si";
import { NavLink, Redirect } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="icon-container">
                <FaReact />
                <SiRedux />
                <FaNodeJs />
                <SiSequelize />
                <SiPostgresql />
                <a
                    className="a-tag"
                    href="https://github.com/nmgarza5/songSpot"
                >
                    <SiGithub />
                </a>
                <a
                    className="a-tag"
                    href="https://www.linkedin.com/in/nikolas-garza-7a3202139/"
                >
                    <FaLinkedin />
                </a>
            </section>
        </footer>
    );
};

export default Footer;
