import type { SDXLImageState, SDXLImageActions } from "./types";

export const setAllSDXLImageList = (payload: SDXLImageState[]): SDXLImageActions => ({
    type: '@SDXLImage/setAllSDXLImageList',
    payload,
})

export const resetAllSDXLImageList = (): SDXLImageActions => ({
    type: '@SDXLImage/resetAllSDXLImageList',
    payload: null,
})

// export const setSDXLImage = (payload: string | HTMLImageElement | null): SDXLImageActions => ({
//     type: '@SDXLImage/setSDXLImage',
//     payload,
// })

// export const setIsUploaded = (payload: boolean): SDXLImageActions => ({
//     type: '@SDXLImage/setIsUploaded',
//     payload,
// })  

// export const setOriginalName = (payload: string): SDXLImageActions => ({
//     type: '@SDXLImage/setOriginalName',
//     payload,
// })      

// export const setMimeType = (payload: string): SDXLImageActions => ({
//     type: '@SDXLImage/setMimeType',
//     payload,
// })          

// export const setFilename = (payload: string): SDXLImageActions => ({
//     type: '@SDXLImage/setFilename',
//     payload,
// })          

// export const setSize = (payload: number): SDXLImageActions => ({
//     type: '@SDXLImage/setSize',
//     payload,
// })              
