import { cn } from '@/lib/utils';
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';
import { FC } from 'react';


interface IconProps {
    icon: IconSvgElement;
    altIcon?: IconSvgElement;
    showAlt?: boolean;
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
}

const Icon: FC<IconProps> = ({ icon, altIcon, showAlt, size, color, strokeWidth, className }) => {
    return (
        <HugeiconsIcon
            icon={icon}
            altIcon={altIcon}
            showAlt={showAlt || false}
            size={size || 24}
            color={color || 'currentColor'}
            strokeWidth={strokeWidth || 1.5}
            className={cn(className)}
        />
    );
};

export default Icon;