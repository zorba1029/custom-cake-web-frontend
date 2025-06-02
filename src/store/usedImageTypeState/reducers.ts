import type { UsedImageTypeState, UsedImageTypeActions } from "./types";

const initialState: UsedImageTypeState = {
    usedImageType: null,
}

export const usedImageTypeReducer = (state: UsedImageTypeState = initialState, action: UsedImageTypeActions): UsedImageTypeState => {
    switch (action.type) {
        case '@UsedImageType/setUsedImageType':
            console.log('usedImageTypeReducer - setUsedImageType - action.payload: ', action.payload)
            return { ...state, usedImageType: action.payload }
        case '@UsedImageType/resetUsedImageType':
            return initialState
        default:
            return state
    }
}
