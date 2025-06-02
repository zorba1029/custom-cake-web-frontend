import type { Action } from "redux";

export type UsedImageType = 'source' | 'edge' | null; ///--- | 'colored' | 'sdxl';

export type UsedImageTypeState = {
    usedImageType: UsedImageType;
}

export type SetUsedImageTypeAction = Action<'@UsedImageType/setUsedImageType'> & {
    payload: UsedImageType;
}

export type ResetUsedImageTypeAction = Action<'@UsedImageType/resetUsedImageType'> & {
    payload: null;
}

export type UsedImageTypeActions = SetUsedImageTypeAction | ResetUsedImageTypeAction;

