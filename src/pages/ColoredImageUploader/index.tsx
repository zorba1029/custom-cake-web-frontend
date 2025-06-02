import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import base64ImageToFile from "../../utils/base64ImageToFile";
import { postImageFormData } from "../../services/postAndPut";
import { AppState } from "../../store";
import { ColoredEdgeImageState } from "../../store/coloredEdgeImage";
import ColoredEdgeImageView from "./ColoredEdgeImageView"
import { SDXLImageState } from "../../store/sdxlImage";
import * as SDXLImageStore from "../../store/sdxlImage";
import { UsedImageTypeState } from "../../store/usedImageTypeState";
import GenerateButton from "./GenerateButton";


const ColoredImageUploader = () => {
    const dispatch = useDispatch();
    const usedImageTypeState = useSelector<AppState, UsedImageTypeState>((state) => state.usedImageTypeReducer)
    const coloredEdgeImageState = useSelector<AppState, ColoredEdgeImageState>((state) => state.coloredEdgeImageReducer);
    const setAllSDXLImageState = useCallback((imageData: SDXLImageState[]) => {
        dispatch(SDXLImageStore.setAllSDXLImageList(imageData))
    }, [dispatch]);
    const resetAllSDXLImageState = useCallback(() => {
        dispatch(SDXLImageStore.resetAllSDXLImageList())
    }, [dispatch]);
    const [message, setMessage] = useState<string>('');
    const [loadingGenerateImage, setLoadingGenerateImage] = useState(false);
    const uploadHandler = useCallback(async (e: React.MouseEvent) => {
        e.stopPropagation();

        if (coloredEdgeImageState === null) {
            setMessage('No image selected.');
            return;
        }

        setLoadingGenerateImage(true)
        resetAllSDXLImageState();
        const { originalName, mimeType, filename, size } = coloredEdgeImageState;
        const coloredEdgeImageFile = base64ImageToFile(coloredEdgeImageState.coloredEdgeImage as string, filename);
        // console.log('ColoredImageUploader - coloredEdgeImageFile', coloredEdgeImageFile);
        console.log('ColoredImageUploader - coloredEdgeImageFile.name', coloredEdgeImageFile.name);
        console.log('ColoredImageUploader - coloredEdgeImageFile.size', coloredEdgeImageFile.size); 
        console.log('ColoredImageUploader - coloredEdgeImageFile.lastModified', coloredEdgeImageFile.lastModified);
        console.log('ColoredImageUploader - coloredEdgeImageFile.type', coloredEdgeImageFile.type);

        //  response from Server:{ok: true, file: {…}, images: Array(2)}
        // file : 
        //      destination: "/Volumes/SSD_01/fun/custom_cake/web-backend/custom_cake_was/uploads/colored_images"
        //      encoding: "7bit"
        //      fieldname: "colored_edge_image"
        //      filename: "colored-1ddd3a1c-bc5a-4cde-add8-506f8519aa1f-un4dz5eznU.png"
        //      mimetype: "image/png"
        //      originalname: "colored-1ddd3a1c-bc5a-4cde-add8-506f8519aa1f-un4dz5eznU.png"
        //      path: "/Volumes/SSD_01/fun/custom_cake/web-backend/custom_cake_was/uploads/colored_images/colored-1ddd3a1c-bc5a-4cde-add8-506f8519aa1f-un4dz5eznU.png"
        //      size: 195298
        // images: Array(2)
        //      0: {
        //          filename: "output_img2img_turbo_20241217-234145_1.png", 
        //          imageData: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAq…", 
        //          …}
        //      1: {
        //          filename: "output_img2img_turbo_20241217-234145_2.png", 
        //          imageData: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAq…", 
        //          …}
        // length: 2
        //-- DEBUG: ServerURL:- colored_edge_image_upload
        const formData = new FormData();
        //-- DEBUG: ServerURL:- colored_edge_image
        // formData.append('src_image', coloredEdgeImageFile, coloredEdgeImageFile.name);
        formData.append('colored_edge_image', coloredEdgeImageFile, coloredEdgeImageFile.name);
        formData.append('lastModified', new Date().toISOString());
        
        try {
            const response = await postImageFormData('/colored_edge_image_upload', formData);
            const result = await response.json();
            
            if (result.ok === true) {
                console.log('/colored_edge_image_upload -- response result', result);
                const { fieldname, filename } = result.file;
                // const { imageData } = result;
                console.log('/colored_edge_image_upload -- response fieldname', fieldname);
                console.log('/colored_edge_image_upload -- response filename', filename);
                if (result.images && Array.isArray(result.images)) {
                    console.log('ColoredImageUploader - Generated Multiple Images', result.images);
                    // 첫 번째와 두 번째 이미지 데이터 처리
                    const [image1, image2, image3, image4] = result.images;
                    
                    // 두 이미지를 모두 저장하기 위해 배열 형태로 저장
                    setAllSDXLImageState([
                        {
                            sdxlImage: image1.imageData as string,
                            isUploaded: true,
                            originalName: originalName as string,
                            mimeType: mimeType as string,
                            filename: image1.filename as string,
                            size: size as number
                        },
                        {
                            sdxlImage: image2.imageData as string,
                            isUploaded: true,
                            originalName: originalName as string,
                            mimeType: mimeType as string,
                            filename: image2.filename as string,
                            size: size as number
                        },
                        {
                            sdxlImage: image3.imageData as string,
                            isUploaded: true,
                            originalName: originalName as string,
                            mimeType: mimeType as string,
                            filename: image3.filename as string,
                            size: size as number
                        },
                        {
                            sdxlImage: image4.imageData as string,
                            isUploaded: true,
                            originalName: originalName as string,
                            mimeType: mimeType as string,
                            filename: image4.filename as string,
                            size: size as number
                        }
                    ]);
                    setMessage(`이미지 4개 생성 완료: ${image1.filename},  ${image2.filename}, ${image3.filename}, ${image4.filename}`);
                } else {
                    setMessage(`Error: ${result.error}`);
                }
            } else {
                setMessage(`Error: ${result.error}`);
            }
        } catch (error) {
            console.error('Upload failed:', error);
            setMessage('Upload failed. Check console for details.');
        } finally {
            const timer = setTimeout(() => {
                setLoadingGenerateImage(false)
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [coloredEdgeImageState, loadingGenerateImage]);


    // prettier-ignore
    return (
        <div className="relative flex flex-col items-center justify-center mt-7" 
            onDrop={(e) => {e.preventDefault(); e.stopPropagation()}}>
            {usedImageTypeState?.usedImageType !== null && (
            <>
                <div className="flex flex-row items-center justify-center  w-[50rem] pl-5 pr-5 bg-orange-400 border-2 border-indigo-800 rounded-full">
                    <h1 className="mt-4 mb-3 text-2xl font-bold text-indigo-900">채색한 이미지</h1>
                </div>
                <ColoredEdgeImageView />
                <GenerateButton onClick={uploadHandler} loading={loadingGenerateImage} />
                {message && (
                        <p className={`mt-2 text-center  ${'text-green-500' }`} >
                            {message}
                        </p>
                    )}
            </>
            )}
        </div>
    )
}

export default ColoredImageUploader;
