import { forwardRef } from 'react';


type FileInputProps = {
    onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>((props: FileInputProps, inputRef) => {
    const { onFileChange } = props;
    
    return (
        <input 
            ref={inputRef} 
            type="file"
            accept=".png,.jpeg,.jpg"
            className="hidden"
            onChange={onFileChange}
        />
    );
});

export default FileInput;