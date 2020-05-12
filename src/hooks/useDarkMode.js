import { useState, useEffect } from 'react';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = () =>{
    const [storedValue, setStoredValue] = useLocalStorage(darkMode)
}