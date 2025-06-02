export const getServerUrl = (path: string) => {
    // 개발시 사용 (npm run dev 시 사용)
    // const host = 'http://localhost:5173/api/v1'
    // 배포시 사용 (npm run build 시 사용)
    const host = `${window.location.origin}`
    const url = [host, path].join('')
    console.log('server url = ', url)
    return url
}