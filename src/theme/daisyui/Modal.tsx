import type { FC } from "react";
import { ReactDivProps } from "../../components";
import { Div } from "../../components";
import { Icon } from "./Icon";

export type ModalProps = ReactDivProps & {
    open?: boolean;
}

export const Modal: FC<ModalProps> = ({open, className: _className, ...props}) => {
    const modalClassName = ['modal', open ? 'modal-open' : '', _className].join(' ');
    return (
        <div className={modalClassName} {...props} />
    )
}

export type ModalContentProps = ReactDivProps & {
    onCloseIconClicked?: () => void;
    closeIconClassName?: string;
}

export const ModalContent: FC<ModalContentProps> = ({ 
        onCloseIconClicked, 
        closeIconClassName: _closeIconClassName, 
        className: _className, 
        children, 
        ...props}) => {
    const showCloseIcon = onCloseIconClicked ? true : false
    const className = ['modal-box', showCloseIcon && 'relative', _className].join(' ');
    
    if (!showCloseIcon) {
        return <div {...props} className={className} children={children}></div>
    }

    const closeIconClassName = _closeIconClassName ?? 'btn-primary btn-outline btn-sm';

    return (
        <div className={className} {...props}>
            <Div className="absolute" right="0.5rem" top="0.5rem">
                <Icon name="close" className={closeIconClassName} onClick={onCloseIconClicked}/>
            </Div>
            {children}
        </div>
    )
}

export type ModalActionProps = ReactDivProps & { }

export const ModalAction: FC<ModalActionProps> = ({className: _className, ...props}) => {
    const className = ['modal-action', _className].join(' ');
    return (
        <div className={className} {...props} />
    )
}