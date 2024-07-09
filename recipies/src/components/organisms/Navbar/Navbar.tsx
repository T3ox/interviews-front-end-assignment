import React from "react";
import CustomButton from "../../atoms/Button/CustomButton";
import "./styles.scss";

const Navbar = () => {
    return (
        <header id="navbar-header">
            <nav className="navbar container">
                <h2>Recipes</h2>
                <div className="button-section d-flex">
                    <CustomButton text="Add" handle={() => {}} />
                    <CustomButton text="Filter" handle={() => {}} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
