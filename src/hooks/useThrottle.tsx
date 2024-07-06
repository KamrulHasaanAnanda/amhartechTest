import { useState } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const [lastCall, setLastCall] = useState(0);

    return (...args: any[]) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            setLastCall(now);
            callback(...args);
        }
    };
};