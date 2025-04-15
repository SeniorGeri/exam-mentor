import { createContext, useContext } from "react";
import { Country } from "../countries/data";

const CountriesContext = createContext([]);

export const CountriesProvider = ({ children, countries }: { children: React.ReactNode, countries: Country[] }) => {
    return (
        <CountriesContext.Provider value={countries}>
            {children}
        </CountriesContext.Provider>
    );
};

export const useCountries = () => useContext(CountriesContext);
