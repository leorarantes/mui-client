import { createContext } from 'react';

interface Alert {
    type: string;
    message: string
}

const AlertContext = createContext<any>(null);

export default AlertContext;