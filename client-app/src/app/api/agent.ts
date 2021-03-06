import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Application } from '../models/app';
import { Photo, Profile } from '../models/profile';
import { User, UserFormValues } from '../models/User';
import { store } from '../stores/store';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.interceptors.response.use(async response => {
    if (process.env.NODE_ENV === 'development') await sleep(1000);
    return response;
}, (error: AxiosError) => {
    const { data, status, config, headers } = error.response!;
    switch (status) {
        case 400:
            if (typeof(data) === 'string') toast.error(data)
            if (config.method === 'get' && data.errors.hasOwnProperty('id')) 
                history.push('not-found')
            if (data.errors) {
                const modalStateErrors = [];
                for (const key in data.errors) {
                    if(data.errors[key]) modalStateErrors.push(data.errors[key]);
                }
                throw modalStateErrors.flat();
            }
            break;
        case 401:
            if (status === 401 && headers['www-authenticate']?.startsWith('Bearer error="invalid_token"')) {
                store.userStore.logout();
                toast.error('Session expired - please login again');
            }
            break;
        case 404:
            history.push('/not-found')
            break;
        case 500:
            store.commonStore.setServerError(data)
            history.push('server-error');
            break;
    }
    return Promise.reject(error)
})

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(config => {
    const token = store.commonStore.token;
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config;
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Applications = {
    list: () => requests.get<Application[]>('/apps'),
    details: (id: string) => requests.get<Application>(`/apps/${id}`),
    create: (app: Application) => requests.post<void>(`/apps`, app),
    update: (app: Application) => requests.put<void>(`/apps`, app),
    delele: (id: string) => requests.del<void>(`/apps/${id}`)
}

const Account = {
    current: () => requests.get<User>('/account'),
    login: (user: UserFormValues) => requests.post<User>('/account/login', user),
    register: (user: UserFormValues) => requests.post<User>('/account/register', user),
    refreshToken: () => requests.post<User>('/account/refreshToken', {})
}

const Profiles = {
    get: (username: string) => requests.get<Profile>(`/profiles/${username}`),
    updateProfile: (profile: Partial<Profile>) => requests.put('/profiles', profile),
    uploadPhoto: (file: Blob) => {
        let formData = new FormData();
        formData.append('File', file);
        return axios.post<Photo>('photos', formData, {
            headers: {'Content-type': 'multipart/form-data'}
        })
    },
    setMainPhoto: (id: string) => requests.post(`/photos/${id}/setMain`, {}),
    deletePhoto: (id: string) => requests.del(`/photos/${id}`)
}

const agent = {
    Applications,
    Account,
    Profiles
}

export default agent;