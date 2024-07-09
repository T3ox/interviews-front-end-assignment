import React from "react";
import Navbar from "../../organisms/Navbar/Navbar";
import Props from "./types";

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
