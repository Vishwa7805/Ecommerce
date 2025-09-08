import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user/me', { withCredentials: true });
                setCurrentUser(response.data);
            }
            catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        fetchUser();
    }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;