
import axios, { AxiosResponse } from 'axios';

interface LoginResponse {
    token: string;
    userId: string;
}

export const login = async (
    username: string,
    password: string
): Promise<AxiosResponse<LoginResponse>> => {
    try {
        return await axios.post<LoginResponse>('http://localhost:6000/api/login', {
            username,
            password,
        });
    } catch (error) {
        console.error('Giriş hatası:', error);
        throw error; // Re-throw the error if needed
    }
};

export const signUp = async (
    username: string,
    password: string
): Promise<AxiosResponse<LoginResponse>> => {
    try {
        return await axios.post<LoginResponse>('http://localhost:6000/api/signUp', {
            username,
            password,
        });
    } catch (error) {
        console.error('Giriş hatası:', error);
        throw error; // Re-throw the error if needed
    }
};


