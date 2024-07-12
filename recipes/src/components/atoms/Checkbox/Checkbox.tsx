import React, { ChangeEvent, useEffect, useState } from "react";
import { addFilter, removeFilter } from "../../utils/localStorage";
import "./styles.scss";
import Props from "./type";

const Checkbox: React.FC<Props> = ({ filterOption, selectedCategories, onChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(selectedCategories.includes(filterOption));
    }, [filterOption, selectedCategories]);

    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;
        setIsChecked(checked);

        if (checked) {
            onChange([...selectedCategories, filterOption]);
            addFilter(filterOption);
        } else {
            onChange(selectedCategories.filter((category) => category !== filterOption));
            removeFilter(filterOption);
        }
    };

    return (
        <div className="filter-option d-flex align-items-center">
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
