import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { EdgeImageState } from '../../store/edgeImage';

type ImagePreviewProps = {
    previewImage: string | null;
}

const EdgedImagePreview = (props: ImagePreviewProps) => {
    const { previewImage } = props;
    const edgeImageState = useSelector<AppState, EdgeImageState>((state) => state.edgeImageReducer) 
    const onClickDivHandler = useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
    }, [])

    // console.log('EdgedImagePreview - edgeImageState', edgeImageState);
    
    return (
        <div 
            onClick={(e) => onClickDivHandler(e)}
            className={`flex flex-col items-center justify-center text-center cursor-pointer ${previewImage ? '' : 'invisible'}`}>
            
            <p className="invisible mb-2">
                <span className="font-medium text-orange-700">여기를 클릭하거나 마우스로 이미지를 드래그 해주세요</span> 
            </p>
            
            <p className="invisible text-sm text-gray-500">PNG, JPG/JPEG (max 1024 X 1024px)</p>

            <div className="cursor-default border-2 border-solid border-green-500 
                            w-[25rem] h-[25rem] flex items-center justify-center mt-4 ml-4 bg-gray-800">
                {edgeImageState?.edgeImage ? (
                    <img 
                        src={edgeImageState.edgeImage as string} 
                        alt="윤곽선 이미지" 
                        className="object-contain w-full h-full pt-0 mt-0 border-2 border-gray-300"
                        onClick={(e) => e.stopPropagation()} 
                    />
                ) : (
                    <div className="text-center text-indigo-500 cursor-pointer ">윤곽선 이미지 보기 화면</div>
                )}
            </div>
        </div>
    );
};

export default EdgedImagePreview;
