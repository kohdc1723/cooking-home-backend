import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${isScrolled && "header__scrolled"}`}>
            <h1>COOKING HOME</h1>
            <nav className="header__nav">
                <Link to="/recipes">Recipe Finder</Link>
                <Link className="header__login-button" to="/login">Sign In</Link>
            </nav>
        </header>
    );
};

export default Header;