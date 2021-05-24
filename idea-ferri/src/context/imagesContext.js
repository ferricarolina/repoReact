import { createContext } from "react";
import a71 from '../assets/a71.jpg'
import g100 from '../assets/g100.jpg'
import s21 from '../assets/s21.png'
import note10 from '../assets/note10.jpg'

export const ImageContext = createContext()

export default function ImageProvider({ children }) {

    function getImage(name){
        switch(name){
            case 'a71':
                return a71
            
            case 'g100':
                return g100

            case 's21':
                return s21

            case 'note10':
                return note10

            default:
                return ''
        }
    }

    return <ImageContext.Provider value={{ getImage }}>
        {children}
    </ImageContext.Provider>
}