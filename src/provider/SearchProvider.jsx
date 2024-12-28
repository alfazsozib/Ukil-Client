import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [city, setCity] = useState("All");
    const [practiceArea, setPracticeArea] = useState("All");

    return (
        <SearchContext.Provider value={{ city, setCity, practiceArea, setPracticeArea }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;