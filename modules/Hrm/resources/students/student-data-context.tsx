import { createContext, useContext } from "react";
import { StudentData } from "./data";

const StudentDataContext = createContext<StudentData>({} as StudentData);

export const StudentDataProvider = ({ children, studentData }: { children: React.ReactNode, studentData: StudentData  }) => {
    return (
        <StudentDataContext.Provider value={studentData}>
            {children}
        </StudentDataContext.Provider>
    );
};  

export const useStudentData = () => useContext(StudentDataContext);
