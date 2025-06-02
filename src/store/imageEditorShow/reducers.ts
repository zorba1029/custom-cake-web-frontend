import type { ImageEditorShowState, ImageEditorShowActions } from "./types";

const initialState: ImageEditorShowState = {
    imageEditorShow: false,
}

export const imageEditorShowReducer = (state: ImageEditorShowState = initialState, action: ImageEditorShowActions): ImageEditorShowState => {
    switch (action.type) {
        case '@ImageEditorShow/setImageEditorShow':
            return { ...state, imageEditorShow: true }
        case '@ImageEditorShow/setImageEditorHide':
            return { ...state, imageEditorShow: false }
        default:
            return state
    }
}