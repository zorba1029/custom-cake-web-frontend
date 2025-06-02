import type { SDXLImageState, SDXLImageActions } from "./types";

// const initialState: SDXLImageState = {
//     sdxlImage: null,
//     isUploaded: false,
//     originalName: '',
//     mimeType: '',
//     filename: '',
//     size: 0,
// }

const initialState: SDXLImageState[] = [
    {
        sdxlImage: null,
        isUploaded: false,
        originalName: '',
        mimeType: '',
        filename: '',
        size: 0,
    },
    {
        sdxlImage: null,
        isUploaded: false,
        originalName: '',
        mimeType: '',
        filename: '',
        size: 0,
    },
    {
        sdxlImage: null,
        isUploaded: false,
        originalName: '',
        mimeType: '',
        filename: '',
        size: 0,
    },
    {
        sdxlImage: null,
        isUploaded: false,
        originalName: '',
        mimeType: '',
        filename: '',
        size: 0,
    }
]

export const sdxlImageReducer = (state = initialState, action: SDXLImageActions) => {
    switch (action.type) {
        case '@SDXLImage/setAllSDXLImageList':
            return action.payload
        case '@SDXLImage/resetAllSDXLImageList':
            return initialState
        // case '@SDXLImage/setSDXLImage':
        //     return { ...state, sdxlImage: action.payload }
        // case '@SDXLImage/setIsUploaded':
        //     return { ...state, isUploaded: action.payload }
        // case '@SDXLImage/setOriginalName':
        //     return { ...state, originalName: action.payload }
        // case '@SDXLImage/setMimeType':
        //     return { ...state, mimeType: action.payload }   
        // case '@SDXLImage/setFilename':
        //     return { ...state, filename: action.payload }   
        // case '@SDXLImage/setSize':
        //     return { ...state, size: action.payload }      
        default:
            return state
    }
}
