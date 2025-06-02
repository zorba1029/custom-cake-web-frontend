import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FilerobotImageEditor, { TABS, TOOLS, } from 'react-filerobot-image-editor';
import { AppState } from '../../store';
import { EdgeImageState, } from '../../store/edgeImage';
import { ColoredEdgeImageState } from '../../store/coloredEdgeImage';
import * as ColoredEdgeImageStore from '../../store/coloredEdgeImage';
import { UsedImageTypeState } from '../../store/usedImageTypeState';
import { ImageEditorShowState } from '../../store/imageEditorShow';


const EdgedImageEditor = () => {
    const dispatch = useDispatch()
    const usedImageTypeState = useSelector<AppState, UsedImageTypeState>((state) => state.usedImageTypeReducer)
    const edgeImageState = useSelector<AppState, EdgeImageState>((state) => state.edgeImageReducer)
    const setAllColoredEdgeImageState = useCallback((imageData: ColoredEdgeImageState) => {
        dispatch(ColoredEdgeImageStore.setAllColoredEdgeImage(imageData))
    }, [dispatch, edgeImageState])
    const imageEditorShowState = useSelector<AppState, ImageEditorShowState>((state) => state.imageEditorShowReducer)
    
    const imageEditorZone = (
        <>
        {edgeImageState?.edgeImage && (
        <div className="w-[48rem] h-[54rem] pl-5 pr-6 pt-6 pb-6">
            <FilerobotImageEditor 
                source={edgeImageState?.edgeImage as string}
                onSave={(editedImageObject, designState) => {
                    // console.log('EdgedImageEditor - OnSave() saved', editedImageObject, designState)
                    const coloredFilename = "colored-" + edgeImageState?.filename;
                    setAllColoredEdgeImageState({
                        coloredEdgeImage: editedImageObject?.imageBase64 as string,
                        isUploaded: true,
                        originalName: edgeImageState?.originalName as string,
                        mimeType: editedImageObject?.mimeType as string,
                        filename: coloredFilename,
                        size: edgeImageState?.size as number
                    })
                    console.log('EdgedImageEditor - OnSave() saved', editedImageObject, designState)
                }}
                onClose={() => { console.log('onClose called'); }}
                annotationsCommon={{
                    fill: '#ff0000',
                }}
                Text={{ text: '...' }}
                Rotate={{ angle: 90, componentType: 'slider' }}
                tabsIds={[TABS.ADJUST, TABS.ANNOTATE]}
                defaultTabId={TABS.ANNOTATE}
                defaultToolId={TOOLS.PEN}
                savingPixelRatio={1}
                previewPixelRatio={1}
                />
            </div>
        )}
        </>
    )
        
    console.log('edgeImage = ', edgeImageState?.edgeImage)
    
    // w-[56rem] h-[58rem]
    // w-[52rem] h-[56rem] pl-5 pr-7 pt-7 pb-7
    return (
        <div className="flex flex-col items-center justify-center mt-7" 
                onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
            {imageEditorShowState?.imageEditorShow && usedImageTypeState?.usedImageType === 'edge' && (
            <div className="flex flex-col items-center justify-center m-5" >
                <div className="flex flex-row items-center justify-center w-[50rem] mb-5 pl-5 pr-5 bg-yellow-400 border-2 border-indigo-800 rounded-full">
                    <h1 className="mt-4 mb-3 text-2xl font-bold text-indigo-900">이미지 편집기</h1>
                </div>
                
                {edgeImageState?.edgeImage && (
                    <>
                    <div className="w-[50rem] h-[56rem] flex flex-col items-center justify-center bg-yellow-200 
                                    border-4 border-dashed border-orange-500 rounded-3xl">
                        {imageEditorZone}
                    </div>    
                    </>
                )}
            </div>
            )}
        </div>
    );
};

export default EdgedImageEditor;