import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority"
// import React, { Children } from "react";
import React from "react";


// interface ButtonProps {
//     children: React.ReactNode;
// href: string;
// }

export interface ButtonProps 
// extends React.ButtonHTMLAttributes<HTMLButtonElement>
// VariantProps<typeof buttonVariants>
     {
    // asChild?: boolean,
    children: React.ReactNode;
    href: string;
}


const buttonVariants = cva(
   
  );

const NewButton = ({ children, href }: ButtonProps) => {
    return <Link href={href}>{children}</Link>;
};
  
export default NewButton;