import React from 'react';
import { Icon } from '../../theme/daisyui';

type UploadButtonProps = {
    onClick: (e: React.MouseEvent) => void;
    isSrcImageLoaded: boolean;
    loadingEdgeImage: boolean;
}

const UploadButton = (props: UploadButtonProps) => {
    const { onClick: uploadHandler, isSrcImageLoaded, loadingEdgeImage } = props;
    
    return (
        <div className={`relative flex items-center justify-evenly `}>
            <div 
                className={`btn btn-primary h-[4rem] ${isSrcImageLoaded ? 'invisible' : ''}`} 
                onClick={uploadHandler} >
                <Icon name="forward" className='btn-warning btn-sm' disabled={loadingEdgeImage} />
                <p className="my-1 mx-1 w-[4rem] text-lg">유곽선 이미지</p>
                
            </div>
            {/* 로딩 표시 */}
            {loadingEdgeImage && (
                <div className="absolute flex items-center justify-center w-full h-full bg-black rounded-md bg-opacity-30">
                    <button className="text-red-400 btn btn-sm btn-circle loading"></button>
                </div>
            )} 
        </div>
  );
};

export default UploadButton;