import React, {createContext, useState, useContext} from 'react';


const DataCesta = createContext();


export default function CestaProvider({ children }){
    let arr = []
    const [ cestaData, setCestaData ] = useState(arr);

    return(
        <DataCesta.Provider value={{ cestaData, setCestaData }}>
            { children } 
        </DataCesta.Provider>
    )
}

export function useCarrinho(){

    const context = useContext(DataCesta);

    const { cestaData, setCestaData } = context;

    return { cestaData, setCestaData };

}