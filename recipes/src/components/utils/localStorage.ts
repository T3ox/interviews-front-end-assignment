export const getLocalRecipes = (): string[] => {
    return JSON.parse(localStorage.getItem("activeFilters") || "[]");
};

export const setLocalRecipes = (filters: string[]): void => {
    localStorage.setItem("activeFilters", JSON.stringify(filters));
};

export const addFilter = (filter: string): void => {
    const filters = getLocalRecipes();
    if (!filters.includes(filter)) {
        filters.push(filter);
        setLocalRecipes(filters);
    }
};

export const removeFilter = (filter: string): void => {
    const filters = getLocalRecipes();
    const updatedFilters = filters.filter((f) => f !== filter);
    setLocalRecipes(updatedFilters);
};

export const getLocalIngredients = () => {
    return localStorage.getItem("filters");
};

export const setLocalIngredients = (selectedFilters: string[]) => {
    localStorage.setItem("filters", selectedFilters.toString());
};

export const getLocalOptions = (): string[][] => {
    return JSON.parse(localStorage.getItem("options") || "[]");
};

export const setLocalOptions = (options: { id: string; name: string }[][]): void => {
    localStorage.setItem("options", JSON.stringify(options));
};
