import type { ColoredEdgeImageState, ColoredEdgeImageActions } from "./types";

const initialState: ColoredEdgeImageState = {
    coloredEdgeImage: null,
    isUploaded: false,
    originalName: '',
    mimeType: '',
    filename: '',
    size: 0,
}

export const coloredEdgeImageReducer = (state = initialState, action: ColoredEdgeImageActions) => {
    switch (action.type) {
        case '@ColoredEdgeImage/setAllColoredEdgeImage':
            return { ...state, ...action.payload }
        case '@ColoredEdgeImage/resetAllColoredEdgeImage':
            return initialState
        // case '@ColoredEdgeImage/setColoredEdgeImage':
        //     return { ...state, coloredEdgeImage: action.payload }
        // case '@ColoredEdgeImage/setIsUploaded':
        //     return { ...state, isUploaded: action.payload }
        // case '@ColoredEdgeImage/setOriginalName':
        //     return { ...state, originalName: action.payload }
        // case '@ColoredEdgeImage/setMimeType':
        //     return { ...state, mimeType: action.payload }   
        // case '@ColoredEdgeImage/setFilename':
        //     return { ...state, filename: action.payload }   
        // case '@ColoredEdgeImage/setSize':
        //     return { ...state, size: action.payload }      
        default:
            return state
    }
}
