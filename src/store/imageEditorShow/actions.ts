import type { SetImageEditorHideAction, SetImageEditorShowAction } from "./types";

export const setImageEditorShow = (): SetImageEditorShowAction => ({
    type: '@ImageEditorShow/setImageEditorShow',
    payload: true,
})

export const setImageEditorHide = (): SetImageEditorHideAction => ({
    type: '@ImageEditorShow/setImageEditorHide',
    payload: false,
})