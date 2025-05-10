import { createContext, useContext } from "react";
import { ActiveCourseStatus } from "./data";

const StatusContext = createContext<ActiveCourseStatus[]>({} as ActiveCourseStatus[]);

export const StatusProvider = ({ children, activeCourseStatuses }: { children: React.ReactNode, activeCourseStatuses: ActiveCourseStatus[]  }) => {
    return (
        <StatusContext.Provider value={activeCourseStatuses}>
            {children}
        </StatusContext.Provider>
    );
};
export const useStatuses = () => useContext(StatusContext);
