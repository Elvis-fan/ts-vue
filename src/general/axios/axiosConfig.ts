import axios from 'axios';

const BASE_URL: string = process.env.BASE_URL;
const DEFAULT_TIME_OUT = 10000;

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = DEFAULT_TIME_OUT;
axios.defaults.headers.common = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ',
    'X-Requested-With': 'XMLHttpRequest'
};
axios.defaults.headers.post['Content-Type'] = 'application/json';

(axios.interceptors.response as any).use((res: any) => {
    return Promise.resolve(res);
    // if (res.data.status === 0) {
    //     return Promise.resolve(res.data.data);
    // }

    // if (res.data === 'NO_LOGIN') {
    //     window.location.href = 'login';
    //     return;
    // }

    // const responseError: any = new Error(res.data.message);
    // responseError.origin = res.data;
    // throw responseError;
}, (error: any) => {
    let responseError: any;
    if (error.response.status === 500) {
        responseError = new Error('服务器内部错误，请稍后重试或与管理员联系');
    } else {
        responseError = new Error('消息发送失败，请稍后重试或与管理员联系');
    }

    responseError.error = error;
    throw responseError;
});
