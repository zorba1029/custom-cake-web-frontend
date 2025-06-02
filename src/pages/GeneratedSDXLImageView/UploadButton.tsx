// import { Icon } from '../../theme/daisyui';

// type UploadButtonProps = {
//     onClick: (e: React.MouseEvent) => void;
//     isDisabled: boolean;
// }

// const UploadButton = (props: UploadButtonProps) => {
//     const { onClick: uploadHandler, isDisabled } = props;
    
//     return (
//         <div className={`flex items-center justify-evenly `}>
//             <div 
//                 className={`btn btn-primary h-[4rem] ${isDisabled ? 'invisible' : ''}`} 
//                 onClick={uploadHandler} >
//                 <Icon name="forward" className='btn-warning btn-xs' />
//                 <p className="my-1 mx-1 w-[4rem]">Image Generate</p>
//             </div>
            
//             {/* {message && (
//             <p className={`mt-2 text-center ${
//                 message.includes('successful') ? 'text-green-500' : 'text-red-500' }`} >
//                 {message}
//             </p>
//             )} 
//             */}
//         </div>
//     );
// };

// export default UploadButton;