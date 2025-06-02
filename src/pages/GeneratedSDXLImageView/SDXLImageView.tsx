import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { SDXLImageState } from '../../store/sdxlImage';

type SDXLImageViewProps = {
    index: number;
}

const SDXLImageView = ({ index }: SDXLImageViewProps) => {
    const sdxlImageListState: SDXLImageState[] = useSelector<AppState, SDXLImageState[]>((state) => state.sdxlImageReducer)
    const sdxlImageState = sdxlImageListState ? sdxlImageListState[index] : null

    return (
        <div className="relative flex items-center justify-center cursor-default border-4 border-solid border-indigo-800 
                        w-[18rem] h-[18rem] m-2 p-7 bg-indigo-300">
            {sdxlImageState?.sdxlImage ? (
                <img 
                    src={sdxlImageState?.sdxlImage as string} 
                    alt="SDXL 이미지" 
                    className="object-contain w-full h-full pt-0 mt-0 bg-blue-900 border-2 border-indigo-800"
                    onClick={(e) => e.stopPropagation()} 
                    />
                ) : (
                    <div className="text-center text-indigo-900 cursor-pointer ">생성된 이미지: {index+1}</div>
                )}
        </div>
    );
};

export default SDXLImageView;

// {/* <> */}
// {/* <div className="flex flex-col items-center justify-center mx-10 mb-5" >
//     <div className="relative cursor-default border-4 border-solid border-yellow-400 
//                     w-[20rem] h-[20rem] p-10  bg-indigo-300">
//         {sdxlImageState?.sdxlImage ? (
//             <img 
//                 src={sdxlImageState?.sdxlImage as string} 
//                 alt="SDXL 이미지" 
//                 className="object-contain w-full h-full pt-0 mt-0 bg-blue-900 border-2 border-indigo-800"
//                 onClick={(e) => e.stopPropagation()} 
//                 />
//             ) : (
//                 <div className="text-center text-indigo-500 cursor-pointer ">SDXL 이미지 보기 화면</div>
//             )}
//     </div>
// </div>  
// </> */}