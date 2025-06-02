import { useCallback, useRef, useState } from "react"
import { postImageFormData } from "../../services/postAndPut"
import DragDropZone from "./DragDropZone"
import ImagePreview from "./ImagePreview"
import EdgedImagePreview from "./EdgedImagePreview"
import UploadButton from "./UploadButton"
import FileInput from "./FileInput"
import readFileAsDataURL from "../../utils/ImageFileReader"
import { useDispatch, useSelector } from "react-redux"
import * as EdgeImageStore from '../../store/edgeImage'
import * as ColoredEdgeImageStore from '../../store/coloredEdgeImage'
import { EdgeImageState } from "../../store/edgeImage"
import * as SDXLImageStore from "../../store/sdxlImage"
import { ColoredEdgeImageState } from "../../store/coloredEdgeImage"
import ImageUseButton from "./ImageUseButton"
import { UsedImageType, UsedImageTypeState } from "../../store/usedImageTypeState/types"
import * as UsedImageTypeStore from "../../store/usedImageTypeState"
import { RootState } from "../../store/rootReducer"
import { AppState } from "../../store"
import * as ImageEditorShowStore from '../../store/imageEditorShow';


const SourceImageUploader = () => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg']; // 허용되는 파일 유형
    const maxFileSize = 2 * 1024 * 1024; // 최대 파일 크기 (2MB)
    
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [newEdgeImageState, setNewEdgeImageState] = useState<EdgeImageState | null>(null);
    const [newColoredEdgeImageState, setNewColoredEdgeImageState] = useState<ColoredEdgeImageState | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [message, setMessage] = useState<string>('');
    const dispatch = useDispatch()
    const [loadingEdgeImage, setLoadingEdgeImage] = useState(false);
    const [loadingImageEditor, setLoadingImageEditor] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null)

    const edgeImageState = useSelector((state: RootState) => state.edgeImageReducer)
    const setAllEdgeImageState = useCallback((imageData: EdgeImageState) => {
        dispatch(EdgeImageStore.setAllEdgeImage(imageData))
    }, [dispatch])

    const resetAllEdgeImageState = useCallback(() => {
        dispatch(EdgeImageStore.resetAllEdgeImage())
    }, [dispatch])

    const resetAllColoredEdgeImageState = useCallback(() => {
        dispatch(ColoredEdgeImageStore.resetAllColoredEdgeImage())
    }, [dispatch])
    
    const setAllColoredEdgeImageState = useCallback((imageData: ColoredEdgeImageState) => {
        dispatch(ColoredEdgeImageStore.setAllColoredEdgeImage(imageData))
    }, [dispatch])

    const resetAllSDXLImageState = useCallback(() => {
        dispatch(SDXLImageStore.resetAllSDXLImageList())
    }, [dispatch])

    const setUsedImageType = useCallback((imageData: UsedImageType) => {
        dispatch(UsedImageTypeStore.setUsedImageType(imageData))
    }, [dispatch])

    const resetUsedImageType = useCallback(() => {
        dispatch(UsedImageTypeStore.resetUsedImageType())
    }, [dispatch])

    const onClickInputHandler = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
        console.log('SourceImageUploader - onClickInputHandler ----------')
        inputRef.current?.click()
    }, [])
    
    const onDragOverHandler = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    }, [])
    
    const onDragLeaveHandler = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const readFileHandler = useCallback(async (selectedFile: File) => {
        if (!allowedTypes.includes(selectedFile.type)) {
            setMessage('PNG, JPEG, or JPG 파일만 업로드할 수 있습니다.');
            return;
        }
        if (selectedFile.size > maxFileSize) {
            setMessage('2MB 이상의 파일은 업로드할 수 없습니다.');
            return;
        }
        try {
            const dataURL = await readFileAsDataURL(selectedFile);
            setPreviewImage(dataURL);
            resetAllEdgeImageState();
            setImageFile(selectedFile);
            setMessage('');
        } catch (error) {
            setMessage('파일을 읽는 데 실패했습니다.');
            console.log('파일을 읽는 데 실패했습니다. - ', error);
        }
    }, [imageFile]);
    
    const onDropHandler = useCallback(async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (!droppedFile) {
            setMessage('No file selected.');
            return;
        }
        await readFileHandler(droppedFile)
        setIsDragging(false);
        resetUsedImageType();
    }, [imageFile]);

    const onFileChangeHandler = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) {
            setMessage('No file selected.');
            return;
        }
        console.log('onFileChangeHandler ---------- selectedFile', selectedFile?.name)
        await readFileHandler(selectedFile)
        resetUsedImageType();
    }, [imageFile]);

    const onRemoveSourceImageHandler = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setPreviewImage(null);
        resetAllEdgeImageState();
        resetAllColoredEdgeImageState();
        resetAllSDXLImageState();
        setImageFile(null);
        resetUsedImageType();
        setMessage('');
    }, [imageFile]);
    
    //--- Response back to Client ------------------------------------------------------------
    // res.json({
    //     ok: true,
    //     file: uploadedFile,
    //     imageData: `data:${response.headers['content-type']};base64,${imageBase64}`,
    // });
    // -- 실제 응답 데이터 예시
    // { 
    //     "ok":true,
    //     "file":{
    //         "fieldname":"src_image",
    //         "originalname":"50100-s.jpeg",
    //         "encoding":"7bit",
    //         "mimetype":"image/jpeg",
    //         "destination":"/Volumes/SSD_01/fun/custom_cake/web-backend/custom_cake_was/src/uploads",
    //         "filename":"50100-s-1732774698875.jpeg",
    //         "path":"/Volumes/SSD_01/fun/custom_cake/web-backend/custom_cake_was/src/uploads/50100-s-1732774698875.jpeg",
    //         "size":26842
    //     },
    //     "imageData":"data:image/.jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wB--생략---
    // }
    // --------------------------------------------------------------------------------------------
    const uploadHandler = useCallback(async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!imageFile) {
            setMessage('No file selected.');
            return;
        }
        setLoadingEdgeImage(true)
        resetAllEdgeImageState();
        resetAllSDXLImageState();
        resetUsedImageType();
        setIsCheckedImageEditorUse(false)
        dispatch(ImageEditorShowStore.setImageEditorHide())

        console.log('imageFile.name', imageFile.name);
        console.log('imageFile.size', imageFile.size);
        console.log('imageFile.lastModified', imageFile.lastModified);

        const formData = new FormData();
        formData.append('src_image', imageFile, imageFile.name);
        formData.append('lastModified', new Date(imageFile.lastModified).toISOString());

        try {
            const response = await postImageFormData('/srcimg_upload', formData);
            const result = await response.json();

            if (result.ok) {
                const { fieldname, originalname, filename, mimetype, size } = result.file;
                const { imageData: edgeImageData } = result;
                console.log('response ok', result.ok);
                console.log('response fieldname', fieldname);
                console.log('response originalname', originalname);
                console.log('response filename', filename);
                console.log('response mimetype', mimetype);
                console.log('response size', size);

                const newEdgeImageData: EdgeImageState = {
                    edgeImage: edgeImageData as string,
                    isUploaded: result.ok ? true : false,
                    originalName: originalname,
                    mimeType: mimetype,
                    filename: filename,
                    size: size
                }
                // console.log('새로운 엣지 이미지 상태 = ', newEdgeImageData);
                setNewEdgeImageState(newEdgeImageData);
                setAllEdgeImageState(newEdgeImageData); 
                
                // 서버에서 받은 윤곽선 이미지 데이터 설정
                const newColoredEdgeImageData: ColoredEdgeImageState = {
                    coloredEdgeImage: previewImage as string,
                    isUploaded: result.ok ? true : false,
                    originalName: originalname,
                    mimeType: mimetype,
                    filename: filename,
                    size: size
                }
                setNewColoredEdgeImageState(newColoredEdgeImageData)
                setAllColoredEdgeImageState(newColoredEdgeImageData)
                setMessage(`Upload successful! (DEBUG) = ${fieldname}::-- ${filename}`);
            } else {
                setMessage(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Upload failed:', error);
            setMessage('Upload failed. Check console for details.');
        } finally {
            const timer = setTimeout(() => {
                setLoadingEdgeImage(false)
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [imageFile, loadingEdgeImage]);

    const useSourceImageHandler = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        console.log('useSourceImageHandler ----------')
        setUsedImageType('source')
        setAllColoredEdgeImageState(newColoredEdgeImageState as ColoredEdgeImageState)
    }, [newColoredEdgeImageState]);

    const useEdgeImageHandler = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        console.log('useEdgeImageHandler ----------')
        setUsedImageType('edge')
        setAllColoredEdgeImageState({
            coloredEdgeImage: newEdgeImageState?.edgeImage as string,
            isUploaded: newEdgeImageState?.isUploaded as boolean,
            originalName: newEdgeImageState?.originalName as string,
            mimeType: newEdgeImageState?.mimeType as string,
            filename: newEdgeImageState?.filename as string,
            size: newEdgeImageState?.size as number
        })
    }, [newEdgeImageState]);
    
    // 'source' or 'edge'
    const usedImageTypeState = useSelector<AppState, UsedImageTypeState>((state) => state.usedImageTypeReducer)
    // 이미지 편집기 사용 여부 - edge 이미지 사용 시 에만 이미지 편집기 사용 가능
    const [isCheckedImageEditorUse, setIsCheckedImageEditorUse] = useState<boolean>(false);
    const onChangeImageEditorUseHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        console.log('onChangeImageEditorUseHandler = ', e.target.checked)
        setLoadingImageEditor(true)
        setIsCheckedImageEditorUse(e.target.checked)
        if (e.target.checked) {
            dispatch(ImageEditorShowStore.setImageEditorShow())
        } else {
            dispatch(ImageEditorShowStore.setImageEditorHide())
        }
        const timer = setTimeout(() => {
            setLoadingImageEditor(false)
        }, 800);
        return () => clearTimeout(timer);
    }, [usedImageTypeState, loadingImageEditor]);
    const isCheckedImageEditorUseVisible = usedImageTypeState?.usedImageType === 'edge' ? true : false;
    
    const ShowImageEditorCheckbox = (
        <div className={`relative flex flex-row ${isCheckedImageEditorUseVisible ? 'visible' : 'invisible'} pl-4 pr-2 bg-yellow-400 border-2 border-r-2 border-green-500 rounded-full`}>
                <label className="flex flex-row items-center justify-center ml-2 mr-4 cursor-pointer">
                    <input 
                        type="checkbox" 
                        id="checkbox"
                        name="checkbox"
                        className="text-green-500" 
                        disabled={loadingImageEditor}
                        checked={isCheckedImageEditorUse} 
                        onChange={(e) => onChangeImageEditorUseHandler(e)}
                        />
                    <span className="m-1 font-bold text-indigo-800">이미지 편집기 보기</span>
                    {/* 로딩 표시 */}
                    {loadingImageEditor && (
                        <div className="absolute flex items-center justify-center w-full h-full bg-black rounded-full bg-opacity-30">
                            <button className="text-red-400 btn btn-sm btn-circle loading"></button>
                        </div>
                    )} 
                </label>
            </div>
    );
    
    // prettier-ignore
    return (
        <div className="flex flex-col items-center justify-center mt-10" >
            <div className="flex flex-row items-center justify-center w-[50rem] pl-5 pr-5 bg-sky-300 border-2 border-indigo-800 rounded-full">
                <h1 className="mt-4 mb-3 text-2xl font-bold text-indigo-900">원본 이미지</h1>
            </div>
                
            <div className="flex flex-col items-center justify-center" 
                onDrop={(e) => {e.preventDefault(); e.stopPropagation()}}>
                <DragDropZone 
                    onDrop={onDropHandler} 
                    onDragOver={onDragOverHandler} 
                    onDragLeave={onDragLeaveHandler}
                    onClick={onClickInputHandler} 
                    isDragging={isDragging} 
                    >
                    <FileInput ref={inputRef} onFileChange={onFileChangeHandler} />
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-row items-center justify-center">
                            <ImagePreview onClick={onClickInputHandler} onRemoveSourceImage={onRemoveSourceImageHandler}  previewImage={previewImage} />
                            <UploadButton onClick={uploadHandler} isSrcImageLoaded={!previewImage} loadingEdgeImage={loadingEdgeImage} />
                            <EdgedImagePreview previewImage={previewImage} />
                        </div>
                        {message && (
                            <p className={`mt-4 text-center  ${
                                message.includes('successful') ? 'text-green-500' : 'text-red-500' }`} >
                                {message}
                            </p>
                        )}  
                        {edgeImageState.edgeImage && (
                            <div className="flex flex-row items-center w-full mt-4 justify-evenly">
                                <ImageUseButton onClick={useSourceImageHandler} textMessage={"원본 이미지 사용"} isDisabled={!previewImage} />
                                <div className="w-[6rem]"></div>
                                <ImageUseButton onClick={useEdgeImageHandler} textMessage={"윤곽선 이미지 사용"} isDisabled={!previewImage} />
                            </div>
                        )}
                    </div>
                </DragDropZone>
            </div>
            {ShowImageEditorCheckbox}
        </div>
    )
}

export default SourceImageUploader;

// {usedImageTypeState?.usedImageType === 'edge' && (
//     <div className="absolute flex flex-row bg-yellow-400 border-2 border-r-2 border-green-500 rounded-full right-20 -bottom-7">
//         <label htmlFor="checkbox" className="flex items-center justify-center ml-4 mr-4">
//             <input 
//                 type="checkbox" 
//                 id="checkbox"
//                 name="checkbox"
//                 className="text-green-500 cursor-pointer" 
//                 checked={isCheckedImageEditorUse} 
//                 onChange={(e) => onChangeImageEditorUseHandler(e)}
//             />
//             <p className="p-1 m-1 font-bold text-indigo-800">이미지 편집기 보기</p>
//         </label>
//     </div>
//     )}

// {usedImageTypeState?.usedImageType === 'edge' ? (
//     <div className="flex flex-row pl-4 pr-2 bg-yellow-400 border-2 border-r-2 border-green-500 rounded-full">
//         <label className="flex flex-row items-center justify-center ml-2 mr-4">
//             <input 
//                 type="checkbox" 
//                 id="checkbox"
//                 name="checkbox"
//                 className="text-green-500" 
//                 checked={isCheckedImageEditorUse} 
//                 onChange={(e) => onChangeImageEditorUseHandler(e)}
//                 />
//             <span className="m-1 font-bold text-indigo-800">이미지 편집기 보기</span>
//         </label>
//     </div>
//     ): (
//         <div className={`flex flex-row ${isCheckedImageEditorUseVisible ? 'visible' : 'invisible'} pl-4 pr-2 bg-yellow-400 border-2 border-r-2 border-green-500 rounded-full`}>
//         <label className="flex flex-row items-center justify-center ml-2 mr-4">
//             <input 
//                 type="checkbox" 
//                 id="checkbox"
//                 name="checkbox"
//                 className="text-green-500" 
//                 checked={isCheckedImageEditorUse} 
//                 onChange={(e) => onChangeImageEditorUseHandler(e)}
//                 />
//             <span className="m-1 font-bold text-indigo-800">이미지 편집기 보기</span>
//         </label>
//     </div>
//     )}