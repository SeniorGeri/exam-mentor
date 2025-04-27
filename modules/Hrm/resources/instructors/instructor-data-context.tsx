import { createContext, useContext } from "react";
import { InstructorData } from "./data";

const InstructorDataContext = createContext<InstructorData>({} as InstructorData);

export const InstructorDataProvider = ({ children, instructorData }: { children: React.ReactNode, instructorData: InstructorData  }) => {
    return (
        <InstructorDataContext.Provider value={instructorData}>
            {children}
        </InstructorDataContext.Provider>
    );
};  

export const useInstructorData = () => useContext(InstructorDataContext);
