import React from "react"
import classNames from "classnames"

export const Container = ({ 
    children,
    className
    }: { children: React.ReactNode;
    className?: string;
    }) => {
    return (
    <div className={classNames("max-w-[1200px] mx-auto", className)}>
        {children}
    </div>
    );
};