import type { Action } from "redux";


export type ImageEditorShowState = {
    imageEditorShow: boolean;
}

export type SetImageEditorShowAction = Action<'@ImageEditorShow/setImageEditorShow'> & {
    payload: boolean;
}

export type SetImageEditorHideAction = Action<'@ImageEditorShow/setImageEditorHide'> & {
    payload: boolean;
}

export type ImageEditorShowActions = SetImageEditorShowAction | SetImageEditorHideAction;

