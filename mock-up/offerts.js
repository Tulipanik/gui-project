import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const OfertstData = ({ children }) => {
    const bestFiveOferts = [
        { id: 1, productName: 'Nintendo 3DS (ニンテンドー3DS Nintendō Surīdīesu) - 800 zł stan prawie nowy', numberOfSoldCopies:1249, turnover: 249800},
        { id: 2, productName: 'Wii - konsola plus kontrolwer - 250 zł stan lekko używany', numberOfSoldCopies:1013, turnover:  101300},
        { id: 3, productName: 'Mario Party DS - 2007 - 80 zł stan lekko używany', numberOfSoldCopies:800, turnover: 12000},
        { id: 4, productName: 'PlayStation 3 (PS3) - 2016 - konsola + 2 pady - 600 zł stan prawie nowy', numberOfSoldCopies:50, turnover: 5000},
        { id: 5, productName: 'Xbox 360 Microsoft pad - 50 zł stan używany', numberOfSoldCopies:450, turnover: 4500}
    ];
    
    return (
        <DataContext.Provider value={{ bestFiveOferts }}>
            {children}
        </DataContext.Provider>
    );
};
    
export const useData = () => {
    return useContext(DataContext);
};