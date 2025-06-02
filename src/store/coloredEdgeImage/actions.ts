import type { ColoredEdgeImageState, ColoredEdgeImageActions, ResetAllColoredEdgeImageAction } from "./types";

export const setAllColoredEdgeImage = (payload: ColoredEdgeImageState): ColoredEdgeImageActions => ({
    type: '@ColoredEdgeImage/setAllColoredEdgeImage',
    payload,
})

export const resetAllColoredEdgeImage = (): ResetAllColoredEdgeImageAction => ({
    type: '@ColoredEdgeImage/resetAllColoredEdgeImage',
    payload: null,
})

// export const setColoredEdgeImage = (payload: string | HTMLImageElement | null): ColoredEdgeImageActions => ({
//     type: '@ColoredEdgeImage/setColoredEdgeImage',
//     payload,
// })

// export const setIsUploaded = (payload: boolean): ColoredEdgeImageActions => ({
//     type: '@ColoredEdgeImage/setIsUploaded',
//     payload,
// })  

// export const setOriginalName = (payload: string): ColoredEdgeImageActions => ({
//     type: '@ColoredEdgeImage/setOriginalName',
//     payload,
// })      

// export const setMimeType = (payload: string): ColoredEdgeImageActions => ({
//     type: '@ColoredEdgeImage/setMimeType',
//     payload,
// })          

// export const setFilename = (payload: string): ColoredEdgeImageActions => ({
//     type: '@ColoredEdgeImage/setFilename',
//     payload,
// })          

// export const setSize = (payload: number): ColoredEdgeImageActions => ({
//     type: '@ColoredEdgeImage/setSize',
//     payload,
// })              
