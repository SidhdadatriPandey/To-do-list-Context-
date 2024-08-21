import React, { useState, createContext, ReactNode } from 'react';

export interface Data {
    work: Todo[];
    setWork: React.Dispatch<React.SetStateAction<Todo[]>>; 
}

export interface Todo {
    todo: string;
    id: number;
}

const initialData: Data = {
    work: [],
    setWork: () => {}, 
};

const UserContext = createContext<Data>(initialData);

interface AppContextProps {
    children: ReactNode;
}

const AppContext: React.FC<AppContextProps> = ({ children }) => {
    const [work, setWork] = useState<Todo[]>([]);

    const value = {
        work,
        setWork,
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export default AppContext;
export { UserContext };
