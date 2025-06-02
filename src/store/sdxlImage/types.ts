import type { Action } from "redux";

export type SDXLImageState = {
    // coloredEdgeImage: File | Blob | string | HTMLImageElement | HTMLCanvasElement | null;
    sdxlImage: string | HTMLImageElement | null;
    isUploaded: boolean;
    originalName: string;
    mimeType: string;
    filename: string;
    size: number;
}

export type SetAllSDXLImageListAction = Action<'@SDXLImage/setAllSDXLImageList'> & {
    payload: SDXLImageState[];
}

export type ResetAllSDXLImageListAction = Action<'@SDXLImage/resetAllSDXLImageList'> & {
    payload: null;
}

// export type SetColoredEdgeImageAction = Action<'@ColoredEdgeImage/setColoredEdgeImage'> & {
//     payload: string | HTMLImageElement | null;
// }

// export type SetIsUploadedAction = Action<'@ColoredEdgeImage/setIsUploaded'> & {
//     payload: boolean;
// }

// export type SetOriginalNameAction = Action<'@ColoredEdgeImage/setOriginalName'> & {
//     payload: string;
// }

// export type SetMimeTypeAction = Action<'@ColoredEdgeImage/setMimeType'> & {
//     payload: string;
// }

// export type SetFilenameAction = Action<'@ColoredEdgeImage/setFilename'> & {
//     payload: string;
// }

// export type SetSizeAction = Action<'@ColoredEdgeImage/setSize'> & {
//     payload: number;
// }

export type SDXLImageActions = SetAllSDXLImageListAction 
                                    | ResetAllSDXLImageListAction
                                    // | SetSDXLImageAction 
                                    // | SetIsUploadedAction 
                                    // | SetOriginalNameAction 
                                    // | SetMimeTypeAction 
                                    // | SetFilenameAction 
                                    // | SetSizeAction;        
