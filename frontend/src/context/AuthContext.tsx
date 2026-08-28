import React, { createContext, useState, useEffect, ReactNode } from "react";
import apiClient, { setAccessToken } from "@/libs/apiClient";

import { User } from "@/types/api";

interface AuthPayload {
    email: string;
    password: string;
    username?: string;
}

interface User {
    email: string;
    fullname: string;
    completed_kyc: boolean;
}

interface Props {
    children: ReactNode;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isLoggedIn: boolean;
    completedKyc: boolean;
    register: (payload: AuthPayload) => Promise<void>;
    login: (payload: AuthPayload) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    isLoggedIn: false,
    completedKyc: false,
    register: async () => {},
    login: async () => {},
    logout: async () => {},
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                const { data } = await apiClient.post<{ access: string }>(
                    "user/auth/token/refresh/",
                );

                setAccessToken(data.access);

                const userResponse = await apiClient.get<User>("user/profile/");
                setUser(userResponse?.data);
            } catch (err) {
                setUser(null);
                setAccessToken(null);
                console.log(err);
            } finally {
                setLoading(false);
            }
        };
        initializeAuth();
    }, []);

    const fetchCurrentUser = async () => {
        const res = await apiClient.get<User>("user/profile/");
        setUser(res.data);
    };

    const register = async (payload: AuthPayload) => {
        try {
            const { data } = await apiClient.post<{ access: string }>(
                "user/auth/register",
                payload,
            );
            setAccessToken(data.access);
            await fetchCurrentUser();
        } catch (error) {
            throw error;
        }
    };

    const login = async (payload: AuthPayload) => {
        try {
            const { data } = await apiClient.post<{ access: string }>(
                "user/auth/login/",
                payload,
            );
            setAccessToken(data.access);
            await fetchCurrentUser();
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await apiClient.post("user/auth/logout/");
        } catch (error) {
            throw error;
        } finally {
            setAccessToken(null);
            setUser(null);
        }
    };

    let isLoggedIn = !!user;
    let completedKyc = user?.completed_kyc ? true : false;

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isLoggedIn,
                completedKyc,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
