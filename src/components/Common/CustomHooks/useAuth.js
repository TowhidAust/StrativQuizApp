import { useState } from 'react';

export default function useAuth(initialValue) {
    const [isAuth, setIsAuth] = useState(initialValue);
    const login = () => {
        localStorage.setItem('isAuth', 'true');
        setIsAuth(true);
    }
    const logout = () => {
        localStorage.setItem('isAuth', 'false');
        setIsAuth(false);
    }
    return [isAuth, login, logout]
}
