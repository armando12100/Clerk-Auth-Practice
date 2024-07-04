import { createContext, useState} from "react";

export const FinanceContext = createContext();

// eslint-disable-next-line react/prop-types
export const FinanceProvider = ({children}) => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(prevcount => prevcount + 1)
    }

    return (
        <FinanceContext.Provider value={{ count, setCount, addCount}}>
            {children}
        </FinanceContext.Provider>
    )
}