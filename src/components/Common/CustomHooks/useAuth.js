import { useState } from 'react'

export default function useAuth(initialValue) {
    const [isAuth, setIsAuth] = useState(initialValue);
    const login = () => {
        setIsAuth(true);
    }
    const logout = () => {
        setIsAuth(false);
    }
    return [isAuth, login, logout]
}
