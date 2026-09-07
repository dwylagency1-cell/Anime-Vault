import { createContext, useEffect, useState } from "react";

export const favouriteContext = createContext()

export function FavouriteProvider({children}){
    const [favourite, setFavourite] = useState(() => {
        const saved = localStorage.getItem("favourite")

        if (saved){
            return JSON.parse(saved)
        }
        else{
            return []
        }
    });

    
    useEffect(() =>{
        localStorage.setItem("favourite", JSON.stringify(favourite))
    }, [favourite])

    return (
        <favouriteContext.Provider value={{favourite, setFavourite}}>
            {children}
        </favouriteContext.Provider>
    )
}