import { cn } from "@/lib/utils";
import { MouseEventHandler } from "react";

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    icon: React.ReactElement;
}

const IconButton: React.FC<IconButtonProps> = ({
    className,
    onClick,
    icon,
}) => {
    return (
        <button
            className={cn(
                "p-2 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition",
                className
            )}
            onClick={onClick}
        >
            {icon}
        </button>
    );
}

export default IconButton;