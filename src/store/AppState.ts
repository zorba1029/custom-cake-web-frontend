import * as EdgeImage from './edgeImage'
import * as ColoredEdgeImage from './coloredEdgeImage'
import * as SDXLImage from './sdxlImage'
import * as UsedImageType from './usedImageTypeState'
import * as ImageEditorShow from './imageEditorShow'


export type AppState = {
    edgeImageReducer: EdgeImage.EdgeImageState,
    coloredEdgeImageReducer: ColoredEdgeImage.ColoredEdgeImageState,
    sdxlImageReducer: SDXLImage.SDXLImageState[], 
    usedImageTypeReducer: UsedImageType.UsedImageTypeState,
    imageEditorShowReducer: ImageEditorShow.ImageEditorShowState,
}