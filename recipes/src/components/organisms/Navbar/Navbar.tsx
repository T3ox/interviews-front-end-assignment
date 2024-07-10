import React from "react";
import CustomButton from "../../atoms/Button/CustomButton";
import "./styles.scss";

const Navbar = () => {
    return (
        <header id="navbar-header">
            <nav className="navbar container">
                <a href="/">
                    <h2>Recipes</h2>
                </a>
                <div className="button-section d-flex">
                    <CustomButton
                        text="Add"
                        handle={() => {}}
                        disabled={false}
                    />
                    <CustomButton
                        text="Filter"
                        handle={() => {}}
                        disabled={false}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
