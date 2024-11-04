import { useState, useEffect } from "react";

const useOpenPanel = () => {
    const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth < 768);
    const [openPanel, setOpenPanel] = useState(!isMediumScreen);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMediumScreen(window.innerWidth < 768);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const toggleOpenPanel = () => {
        setOpenPanel(!openPanel);
    }
    
    return { openPanel, setOpenPanel, toggleOpenPanel };
};

export default useOpenPanel;