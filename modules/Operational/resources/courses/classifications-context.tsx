import { createContext, useContext } from "react";
import { Classification } from "./data";

const ClassificationsContext = createContext<Classification[]>({} as Classification[]);

export const ClassificationsProvider = ({ children, classifications }: { children: React.ReactNode, classifications: Classification[]  }) => {
    return (
        <ClassificationsContext.Provider value={classifications}>
            {children}
        </ClassificationsContext.Provider>
    );
};
export const useClassifications = () => useContext(ClassificationsContext);
