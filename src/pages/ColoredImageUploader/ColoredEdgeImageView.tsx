import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { ColoredEdgeImageState } from '../../store/coloredEdgeImage';


const ColoredEdgeImageView = () => {
    const coloredEdgeImageState = useSelector<AppState, ColoredEdgeImageState>((state) => state.coloredEdgeImageReducer)
    
    return (
        <>
        {coloredEdgeImageState ? (
            <div className="flex flex-col items-center justify-center m-5" >
                <div className="relative cursor-default border-2 border-double border-green-600 
                                w-[30rem] h-[30rem] p-10  bg-yellow-900">
                    {coloredEdgeImageState?.coloredEdgeImage ? (
                        <img 
                            src={coloredEdgeImageState?.coloredEdgeImage as string} 
                            alt="채색한 이미지" 
                            className="object-contain w-full h-full pt-0 mt-0 bg-blue-900 border-2 border-sky-500"
                            onClick={(e) => e.stopPropagation()} 
                            />
                        ) : (
                            <div className="text-center text-indigo-500 cursor-pointer ">채색한 이미지 보기 화면</div>
                        )}
                </div>
            </div>      
            ) : null}
        </>
    );
};

export default ColoredEdgeImageView;

// {usedImageTypeState?.usedImageType === 'edge' && (
//     <label htmlFor="checkbox" className="flex items-center justify-center">
//         <input type="checkbox" className="text-green-500" checked={isChecked} onChange={onChangeHandler}/>
//         <p className="p-1 ml-2 font-bold text-indigo-800">이미지 편집기 보기</p>
//     </label>
// )}