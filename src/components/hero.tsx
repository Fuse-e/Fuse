import React, { Children } from "react"

interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export const HeroTitle = ( { children }: HeroElementProps ) => {
    return <h1 className="text-5xl text-center my-6">{ children }</h1>
    // <p className="text-lg">{subtitle}</p>
}

export const HeroSubTitle = ( { children }: HeroElementProps ) => {
    return <p className="text-lg text-center mb-12">{children}</p>
}

export const Hero = ({ children}: HeroProps) => {
    return (
        <div className="text-center">
            {children}
        </div>
    )
}