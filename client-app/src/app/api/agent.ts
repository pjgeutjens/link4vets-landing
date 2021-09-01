import axios, { AxiosResponse } from 'axios';
import { Application } from '../models/app';

const sleep = (delay:number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

axios.defaults.baseURL='http://localhost:5000/api';

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Applications = {
    list: () => requests.get<Application[]>('/apps'),
    details: (id: string) => requests.get<Application>(`/apps/${id}`),
    create: (app: Application) => requests.post<void>(`/apps`, app),
    update: (app: Application) => requests.put<void>(`/apps`, app),
    delele: (id: string) => requests.del<void>(`/apps/${id}`)
}

const agent = {
    Applications
}

export default agent;