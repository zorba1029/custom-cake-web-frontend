import type { DetailedHTMLProps, InputHTMLAttributes} from 'react';
import { forwardRef } from 'react';

export type ReactInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputProps = ReactInputProps & { }

// forwardRef를 사용하여 컴포넌트에 ref를 전달할 수 있음
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className: _className, ...inputProps} = props
    const className = ['input', _className].join(' ');
    return (
        <input ref={ref} {...inputProps} className={className} />
    )
});

// export const Input: FC<InputProps> = ({className: _className, ...inputProps}) => {
//     const className = ['input', _className].join(' ');
//     return (
//         <input {...inputProps} className={className} />
//     )
// };