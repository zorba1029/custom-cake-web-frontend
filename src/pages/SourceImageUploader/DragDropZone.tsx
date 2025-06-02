import { useCallback } from 'react';
import { Div } from '../../components/Div';


type DragDropZoneProps = {
    onClick: (e: React.MouseEvent) => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    isDragging: boolean;
    children: React.ReactNode;
}

const DragDropZone = (props: DragDropZoneProps) => {
    const { 
        onClick: onClickInputHandler, 
        onDrop: onDropHandler, 
        onDragOver, 
        onDragLeave, 
        isDragging, 
        children 
    } = props;
    
    const onClickDivHandler = useCallback((e: React.MouseEvent) => {
        console.log('DragDropZone - onClickDivHandler ----------')
        onClickInputHandler(e)
    }, [onClickInputHandler])
    
    return (
        <Div className="flex flex-col items-center justify-center p-5" 
            onDrop={(e) => (e.preventDefault())}>
            <div 
                onDrop={onDropHandler}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onClick={onClickDivHandler}
                className={`w-[67rem] h-[40rem] border-4 border-dashed border-orange-500 rounded-3xl pt-8 pb-6 
                            transition-colors duration-300 ease-in-out
                            ${isDragging ? 'border-indigo-500 bg-blue-300' 
                                        : 'border-orange-400 bg-blue-100'}`} >
                {children}
            </div>
        </Div>
    );
};

export default DragDropZone;
