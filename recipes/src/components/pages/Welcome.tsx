import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../atoms/Button/CustomButton";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <main className="welcome-container container">
            <div className="row justify-content-center">
                <h2>Ricettario</h2>
                <span>Esplorare le nostre ricette</span>
                <CustomButton text="explore" handle={() => navigate("/")} disabled={false} />
            </div>
        </main>
    );
};

export default Welcome;
