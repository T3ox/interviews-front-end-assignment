import React, { useEffect, useState } from "react";
import { addFilter, getLocalRecipes, removeFilter } from "../../utils/localStorage";
import "./styles.scss";
import Props from "./type";

const Checkbox: React.FC<Props> = ({ filterOption }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const activeFilters = getLocalRecipes();
        if (activeFilters.includes(filterOption)) {
            setIsChecked(true);
        }
    }, [filterOption]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            removeFilter(filterOption);
        } else {
            addFilter(filterOption);
        }
    };

    return (
        <div className="filter-option d-flex">
            <input
                type="checkbox"
                id={filterOption}
                name={filterOption}
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={filterOption}>{filterOption}</label>
        </div>
    );
};

export default Checkbox;
