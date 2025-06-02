import { Icon } from '../../theme/daisyui';

type GenerateButtonProps = {
    onClick: (e: React.MouseEvent) => void;
    loading: boolean;
}

const GenerateButton = (props: GenerateButtonProps) => {
    const { onClick: uploadHandler, loading } = props;
    
    return (
        <div className={`relative flex items-center justify-evenly`}>
            <div 
                className={`btn btn-primary h-[3rem]`}
                onClick={uploadHandler} >
                <Icon name="forward" disabled={loading} className='btn-warning btn-sm' />
                <p className="my-1 w-[8rem] text-lg">이미지 생성 </p>
            </div>
            {/* 로딩 표시 */}
            {loading && (
                <div className="absolute flex items-center justify-center w-full h-full bg-black rounded-md bg-opacity-60">
                    <button className="text-red-400 btn btn-sm btn-circle loading"></button>
                </div>
            )}  
        </div>
    );
};

export default GenerateButton;