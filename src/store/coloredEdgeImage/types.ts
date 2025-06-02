import type { Action } from "redux";

export type ColoredEdgeImageState = {
    // coloredEdgeImage: File | Blob | string | HTMLImageElement | HTMLCanvasElement | null;
    coloredEdgeImage: string | HTMLImageElement | null;
    isUploaded: boolean;
    originalName: string;
    mimeType: string;
    filename: string;
    size: number;
}

export type SetAllColoredEdgeImageAction = Action<'@ColoredEdgeImage/setAllColoredEdgeImage'> & {
    payload: ColoredEdgeImageState;
}

export type ResetAllColoredEdgeImageAction = Action<'@ColoredEdgeImage/resetAllColoredEdgeImage'> & {
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

export type ColoredEdgeImageActions = SetAllColoredEdgeImageAction 
                                    | ResetAllColoredEdgeImageAction;
                                    // | SetColoredEdgeImageAction 
                                    // | SetIsUploadedAction 
                                    // | SetOriginalNameAction 
                                    // | SetMimeTypeAction 
                                    // | SetFilenameAction 
                                    // | SetSizeAction;        
