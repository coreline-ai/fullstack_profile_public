import React from 'react';

interface IconProps {
    name: string;
    className?: string;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ name, className = '', onClick }) => {
    return (
        <span
            className={`material-symbols-outlined select-none ${className}`}
            onClick={onClick}
            style={{ fontSize: 'inherit' }}
        >
            {name}
        </span>
    );
};

export default Icon;
