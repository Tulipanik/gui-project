import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const ChartData = ({ children }) => {
    const dataSortedByHours = [
        { id: 1, hours: '08:00-09:00', turnover: 30, sales:1},
        { id: 2, hours: '09:00-10:00', turnover: 90, sales:2},
        { id: 3, hours: '10:00-11:00', turnover: 10, sales:1},
        { id: 4, hours: '11:00-12:00', turnover: 200, sales:11},
        { id: 5, hours: '12:00-13:00', turnover: 250, sales:12},
        { id: 6, hours: '13:00-14:00', turnover: 190, sales:10},
        { id: 7, hours: '14:00-15:00', turnover: 50, sales:3},
        { id: 8, hours: '15:00-16:00', turnover: 15, sales:2},
        { id: 9, hours: '16:00-17:00', turnover: 12, sales:1}
    ];

    const dataSortedByDays = [
        { id: 1, day: 'Poniedziałe', turnover: 740, sales:39},
        { id: 2, day: 'Wtorek', turnover: 847, sales:43},
        { id: 3, day: 'Środa', turnover: 0, sales:0},
        { id: 4, day: 'Czwartek', turnover: 0, sales:0},
        { id: 5, day: 'Piatek', turnover: 0, sales:0},
        { id: 6, day: 'Sobota', turnover: 0, sales:0},
        { id: 7, day: 'Niedziela', turnover: 0, sales:0}
    ];

    const dataSortedByMounths = [
        { id: 1, hours: 'Luty', turnover: 8500, sales:762},
        { id: 2, hours: 'Marzec', turnover: 8300, sales:721},
        { id: 3, hours: 'Kwiecień', turnover: 8450, sales:757},
        { id: 4, hours: 'Maj', turnover: 8213, sales:712},
        { id: 5, hours: 'Czerwiec', turnover: 9171, sales:799},
        { id: 6, hours: 'Lipiec', turnover: 9090, sales:784},
        { id: 7, hours: 'Sierpień', turnover: 9100, sales:783},
        { id: 8, hours: 'Wrzesień', turnover: 8002, sales:700},
        { id: 9, hours: 'Październik', turnover: 8200, sales:711},
        { id: 10, hours: 'Listopad', turnover: 8012, sales:700},
        { id: 11, hours: 'Grudzień', turnover: 1204, sales:903},
        { id: 12, hours: 'Styczeń', turnover: 7823, sales:688},
    ];
    
    return (
        <DataContext.Provider value={{ dataSortedByHours, dataSortedByDays, dataSortedByMounths }}>
            {children}
        </DataContext.Provider>
    );
};
    
export const useData = () => {
    return useContext(DataContext);
};