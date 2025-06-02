import { useCallback } from 'react';
import {Icon} from '../../theme/daisyui'


type ImagePreviewProps = {
    onClick: (e: React.MouseEvent) => void;
    onRemoveSourceImage: (e: React.MouseEvent) => void;
    previewImage: string | null;
}

const ImagePreview = (props: ImagePreviewProps) => {
    const { onClick: onClickHandler, onRemoveSourceImage: onRemoveSourceImageHandler, previewImage } = props;
    
    const onClickDivHandler = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
        onClickHandler(e)
    }, [onClickHandler])

    const ImageRemoveButton = (
        <>
        {previewImage && (
            <Icon 
            name='close'
            className='absolute -right-3 -top-3 btn-warning btn-xs' 
            onClick={(e) => onRemoveSourceImageHandler(e)} 
            />
        )}
        </>
    )
    
    return (
        <div className="flex flex-col items-center justify-center text-center cursor-pointer"
            onClick={(e) => onClickDivHandler(e)} >
            
            <div className="mb-2">
                <span className="font-medium text-orange-700">여기를 클릭하거나 마우스로 이미지를 드래그 해주세요</span> 
                <p className="text-sm text-gray-500">PNG, JPG/JPEG (max 1024 X 1024px)</p>
            </div>

            {previewImage && (
                <div className="relative flex items-center justify-center 
                                cursor-default border-2 border-solid border-green-500 
                                w-[25rem] h-[25rem]  mt-4 mr-4 bg-gray-200">
                    {previewImage ? (
                        <img 
                            src={previewImage} 
                            alt="구름모양 업로드 아이콘" 
                            className="object-contain w-full h-full pt-0 mt-0 border-2 border-gray-300"
                            onClick={(e) => e.stopPropagation()} 
                        />
                    ) : (
                        <div className="text-center text-indigo-500 cursor-pointer">이미지를 업로드 해주세요</div>
                    )}
                    {ImageRemoveButton}
                </div>
            )}

        </div>
    );
};

export default ImagePreview;
