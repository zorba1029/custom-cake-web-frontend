import type { ResetUsedImageTypeAction, SetUsedImageTypeAction, UsedImageType } from "./types";

export const setUsedImageType = (payload: UsedImageType): SetUsedImageTypeAction => ({
    type: '@UsedImageType/setUsedImageType',
    payload,
})

export const resetUsedImageType = (): ResetUsedImageTypeAction => ({
    type: '@UsedImageType/resetUsedImageType',
    payload: null,
})
