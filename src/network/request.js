import axios from 'axios'

export default function ({url,data={},type='get'}) {
    const instance = axios.create({
        baseURL:'http://localhost:3000',
        timeout:3000
    })
    return instance({url,data,type})
}