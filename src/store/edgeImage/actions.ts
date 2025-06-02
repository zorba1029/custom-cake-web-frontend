import type { EdgeImageState, EdgeImageActions, ResetAllEdgeImageAction } from "./types";

export const setAllEdgeImage = (payload: EdgeImageState): EdgeImageActions => ({
    type: '@EdgeImage/setAllEdgeImage',
    payload,
})

export const resetAllEdgeImage = (): ResetAllEdgeImageAction => ({
    type: '@EdgeImage/resetAllEdgeImage',
    payload: null,
})
