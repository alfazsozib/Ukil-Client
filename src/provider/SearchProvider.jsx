import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [selectedCourt, setSelectedCourt] = useState("All");
    const [selectedField, setSelectedField] = useState("All");

    return (
        <SearchContext.Provider value={{ selectedCourt, setSelectedCourt, selectedField, setSelectedField }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;