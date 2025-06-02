import type { EdgeImageState, EdgeImageActions } from "./types";

const initialState: EdgeImageState = {
    edgeImage: null,
    isUploaded: false,
    originalName: '',
    mimeType: '',
    filename: '',
    size: 0,
}

export const edgeImageReducer = (state: EdgeImageState = initialState, action: EdgeImageActions): EdgeImageState => {
    switch (action.type) {
        case '@EdgeImage/setAllEdgeImage':
            console.log('edgeImageReducer - setAllEdgeImage - action.payload: ', action.payload)
            return { ...state, ...action.payload }
        case '@EdgeImage/resetAllEdgeImage':
            return initialState
        default:
            return state
    }
}
