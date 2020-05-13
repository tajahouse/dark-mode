import { useEffect } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = () =>{
    //const [someValue, setSomeValue] = useLocalStorage(darkMode)
   
    const [darkMode, setDarkMode] = useLocalStorage('dark-mode');

    useEffect(()=>{
          darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    } , [darkMode]        
    )
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return [darkMode, toggleMode];
}