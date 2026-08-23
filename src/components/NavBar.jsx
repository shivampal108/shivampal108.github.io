import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaBars, FaXmark } from "react-icons/fa6";

function NavBar({ dark, setDark }) {

    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar-custom">

            {/* Logo */}
         {/* Logo */}
<span
    style={{
        color: "red",
        fontWeight: "bold",
        fontSize: "20px"
    }}
>
    &lt;SHIVAM/DEV&gt;
</span>

            {/* Desktop Menu */}
            <div className="desktop-menu">

                <a href="#about">About</a>

                <a href="#skills">Skills</a>

                <a href="#projects">Projects</a>

                <a href="#education">Education</a>
                <a href="#certifications">Certifications</a>
                <a href="#contact">Contact Me</a>

                <a
                    href="https://github.com/shivam07cyberx/Shivam"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={22} />
                </a>

                <a
                    href="https://www.linkedin.com/in/shivampal108/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={22} />
                </a>

                <ThemeToggle
                    dark={dark}
                    setDark={setDark}
                />

            </div>

            {/* Mobile Hamburger */}
            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaXmark /> : <FaBars />}
            </button>


            {/* Mobile Menu */}
            {menuOpen && (
                <div className="mobile-menu">

                    <a href="#about" onClick={closeMenu}>
                        About
                    </a>

                    <a href="#skills" onClick={closeMenu}>
                        Skills
                    </a>

                    <a href="#projects" onClick={closeMenu}>
                        Projects
                    </a>

                    <a href="#education" onClick={closeMenu}>
                        Education
                    </a>

                    <a href="#certifications" onClick={closeMenu}>
                        Certification
                    </a>
                    <a href="#contact" onClick={closeMenu}>
                        Contact
                    </a>

                    <a
                        href="https://github.com/shivampal108"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        <FaGithub size={22} />
                        <span>GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/shivampal108/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                    >
                        <FaLinkedin size={22} />
                        <span>LinkedIn</span>
                    </a>

                    <div className="mobile-theme">
                        <ThemeToggle
                            dark={dark}
                            setDark={setDark}
                        />
                    </div>

                </div>
            )}

        </nav>
    );
}

export default NavBar;