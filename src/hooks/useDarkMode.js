import { useState, useEffect } from 'react';

export const useDarkMode = () =>{
    const [someValue, setSomeValue] = useLocalStorage(darkMode)
}