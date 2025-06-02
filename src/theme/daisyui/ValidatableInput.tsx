import type {ReactInputProps} from './Input';
import {forwardRef, useImperativeHandle, useMemo, useRef} from 'react';


export type ValidatableInputMathods = {
    validate: () => [boolean, string]
}

// forwardRef와 useImperativeHandle를 사용하여 컴포넌트에 ref를 전달할 수 있음
export const ValidatableInput = forwardRef<ValidatableInputMathods, ReactInputProps>((props, methodsRef) => {
    const {type: inputType, className: _className, ...inputProps} = props
    const className = useMemo(() => ['input', _className].join(' '), [_className])
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(methodsRef, () => ({
        validate: (): [boolean, string] => {
            const value = inputRef.current?.value
            if (!value || !value.length) return [false, '사용자가 입력한 값이 없어요.']

            switch (inputType) {
                case 'email': {
                    const regExp = 
                        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
                    const valid = regExp.test(value)
                    return valid ? [true, value] : [false, '이메일 주소 형식이 아니에요.']
                }
            }
            return [true, value]
        }
    }), [inputType])

    return (
        <input ref={inputRef} {...inputProps} className={className} />
    )
});

// export const Input: FC<InputProps> = ({className: _className, ...inputProps}) => {
//     const className = ['input', _className].join(' ');
//     return (
//         <input {...inputProps} className={className} />
//     )
// };