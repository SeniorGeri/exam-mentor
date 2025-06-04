import { createContext, useContext } from "react";
import { ClassificationGroup } from "./data";

const ClassificationsContext = createContext<ClassificationGroup<string>>({} as ClassificationGroup<string>);

export const ClassificationsProvider = ({ children, classifications }: { children: React.ReactNode, classifications: ClassificationGroup<string>  }) => {
    return (
        <ClassificationsContext.Provider value={classifications}>
            {children}
        </ClassificationsContext.Provider>
    );
};
export const useClassifications = () => useContext(ClassificationsContext);
