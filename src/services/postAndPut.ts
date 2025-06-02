import { getServerUrl } from './getServerUrl'


const postAndPut = (methodName: string) => (
    (path: string, data: object, headers_flag: boolean, jwt?: string | null | undefined) => {
        const headers = headers_flag ? {'Content-Type': 'application/json'} : 
                        {'Content-Type': 'multipart/form-data'}
        
        console.log(`postAndPut - path: ${path}, data: ${JSON.stringify(data)}, headers: ${JSON.stringify(headers)}, jwt: ${jwt}`)
        let init: RequestInit = {
            method: methodName,
            headers: headers,
            body: data instanceof FormData ? data : JSON.stringify(data),
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
        }
        
        if (jwt) {
            init = { ...init, headers: { ...headers, 'Authorization': `Bearer ${jwt}` } }
        } else {
            init = { ...init, headers }
        }
        return fetch(getServerUrl(path), init)
    }
)
    
const postFormData = (methodName: string) => (
    (path: string, data: FormData) => {
        // const headers = {'Content-Type': 'multipart/form-data'}
        console.log(`postAndPutFormData - path: ${path}, 
            data: ${JSON.stringify(Object.fromEntries(data.entries()))}, 
            headers: ${JSON.stringify(data)}`)
        const init: RequestInit = {
            method: methodName,
            body: data,
        }
        return fetch(getServerUrl(path), init)
    }
)

export const post = postAndPut('POST')
export const put = postAndPut('PUT')
export const postImageFormData = postFormData('POST')
