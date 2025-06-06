import type { FC } from "react";
import { Div } from "../components/Div";
import type { DivProps } from "../components/Div";

export type AvatarProps = DivProps & {
    size?: string
}

// prettier-ignore
export const Avatar: FC<AvatarProps> = ({className: _className, style, src, size, ...props}) => {    
    // const w_or_h = size ?? '4rem'
    const w_or_h = size ?? '10rem'
    const className = ['rounded-full bg-cover bg-gray-300', _className].join(' ')

    return (
        <Div
            {...props}
            src={src}
            width={w_or_h}
            height={w_or_h}
            className={className}
            style={style}
        />
    )
}