import { useState } from "react"
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import SDXLImageView from "./SDXLImageView"
import { UsedImageTypeState } from "../../store/usedImageTypeState/types";


const GeneratedSDXLImageView = () => {
    const usedImageTypeState = useSelector<AppState, UsedImageTypeState>((state) => state.usedImageTypeReducer)
    const [message, _setMessage] = useState<string>('');

    // console.log('message = ', message)

    // prettier-ignore
    return (
        <div className="relative flex flex-col items-center justify-center m-12" 
            onDrop={(e) => {e.preventDefault(); e.stopPropagation()}}>
            {usedImageTypeState?.usedImageType !== null && (
            <>
                <div className="flex flex-row items-center justify-center  w-[50rem] pl-5 pr-5 bg-green-300 border-2 border-indigo-800 rounded-full">
                    <h1 className="mt-4 mb-3 text-2xl font-bold text-indigo-900">생성된 이미지 (4개)</h1>
                </div>
                <div className="flex flex-col items-center justify-center p-0 m-1">
                    <div className="flex flex-row items-center justify-center p-0 m-1">
                        <SDXLImageView index={0} />
                        <SDXLImageView index={1} />
                        <SDXLImageView index={2} />
                        <SDXLImageView index={3} />
                    </div>
                    {message && (
                        <p className={`mt-4 text-center  ${
                            message.includes('successful') ? 'text-green-500' : 'text-red-500' }`} >
                            {message}
                        </p>
                    )}
                </div>
            </>
            )}
        </div>
    )
}

export default GeneratedSDXLImageView;