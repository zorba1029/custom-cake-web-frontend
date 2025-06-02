import React from 'react';


type ImageUseButtonProps = {
    onClick: (e: React.MouseEvent) => void;
    textMessage: string;
    isDisabled: boolean;
}

const ImageUseButton = (props: ImageUseButtonProps) => {
    const { onClick: onClickHandler, isDisabled, textMessage } = props;
    
    return (
        <div className={`flex items-center justify-evenly `}>
            <div 
                className={`btn btn-primary w-[15rem] h-[3rem] ${isDisabled ? 'invisible' : ''}`} 
                onClick={onClickHandler} >
                <p className="my-1 mx-1 w-[10rem] text-lg">{textMessage}</p>
            </div>
        </div>
  );
};

export default ImageUseButton;
