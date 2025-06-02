import { combineReducers } from "redux";
import * as EdgeImage from './edgeImage'
import * as ColoredEdgeImage from './coloredEdgeImage'
import * as SDXLImage from './sdxlImage'
import * as UsedImageType from './usedImageTypeState'
import * as ImageEditorShowState from './imageEditorShow'

const rootReducer = combineReducers({
    edgeImageReducer: EdgeImage.edgeImageReducer,
    coloredEdgeImageReducer: ColoredEdgeImage.coloredEdgeImageReducer,
    sdxlImageReducer: SDXLImage.sdxlImageReducer,
    usedImageTypeReducer: UsedImageType.usedImageTypeReducer,
    imageEditorShowReducer: ImageEditorShowState.imageEditorShowReducer,
}) 

export type RootState = ReturnType<typeof rootReducer>; // Optional: for type inference
export default rootReducer;