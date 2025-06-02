import type {FC, DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from 'react'
import type { WidthHeight } from './WidthHeight'
import type { LeftRightTopBottom } from './LeftRightTopBottom'
import type { MinMaxWidthHeight } from './MinMaxWidthHeight'

// type DetailedHTMLProps<E extends HTMLAttributes<T>, T> = ClassAttributes<T> & E;
// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };

export type ReactDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type DivProps = ReactDivProps & 
    PropsWithChildren<WidthHeight> & 
    LeftRightTopBottom & 
    MinMaxWidthHeight & {
        src?: string
    }

// prettier-ignore
export const Div: FC<DivProps> = ({width, height, 
                                    style: _style, 
                                    src, 
                                    className: _className,
                                    left, right, top, bottom, 
                                    minWidth, maxWidth, minHeight, maxHeight,
                                    ...props}) => {
    const style = {
        ..._style, 
        width, height, 
        backgroundImage: src ? `url(${src})` : undefined,
        left, right, top, bottom,
        minWidth, maxWidth, minHeight, maxHeight
    }
    const className = ['box-sizing', src && 'bg-gray-300', _className].join(' ')
    return <div className={className} style={style} {...props}></div>
}

