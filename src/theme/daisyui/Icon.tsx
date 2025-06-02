import type { FC } from "react";
import type { ButtonProps } from "./Button";
import type { IconProps as TIconProps } from "../../components";
import { Button } from "./Button";
import { Icon as TIcon } from "../../components";

export type IconProps = ButtonProps & TIconProps & {
    iconClassName?: string;
}

export const Icon: FC<IconProps> = ({name, iconClassName, className, ...buttonProps}) => {
    const btnClassName = ['btn-circle', className].join(' ');
    return (
        <Button className={btnClassName} {...buttonProps}>
            <TIcon name={name} className={iconClassName} />
        </Button>
    )
}